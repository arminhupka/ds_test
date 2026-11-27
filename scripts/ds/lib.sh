#!/usr/bin/env bash
# Shared helpers of the design-sync jobs. Source it, do not run it.
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

# sha256 of files, in the format "<hash>  <path>": Linux has sha256sum, macOS has shasum.
if command -v sha256sum >/dev/null 2>&1; then SHA256="sha256sum"; else SHA256="shasum -a 256"; fi

# ds_org_var <PREFIX> <org>: the value of PREFIX_<ORG>, for example ds_org_var CLAUDE_TOKEN org2 reads CLAUDE_TOKEN_ORG2.
# Every setting of an organization is a project variable named after it, so a new organization needs no change in the scripts.
ds_org_var() { local n; n="$1_$(printf '%s' "$2" | tr 'a-z-' 'A-Z_')"; printf '%s' "${!n:-}"; }

log() { printf '%s  %s\n' "$(date '+%F %T')" "$*"; }

# notify <title> <message>: for now only the log; the one place to add Slack or any other channel later.
notify() { log "NOTIFY  $1: $2"; }

# manifest <dir>: "sha256  relative/path" for every file, sorted, without volatile files when DS_IGNORE is set.
manifest() {
  (cd "$1" && find . -type f ! -name .DS_Store | sed 's#^\./##' | sort | grep -vxE "${DS_IGNORE:-^$}" | while read -r f; do $SHA256 "$f"; done)
}

# --- the interactive Claude session -------------------------------------------------------------
# `claude -p` has no Artifact tool; an interactive `claude` has. So the jobs run in one interactive session kept in tmux.
# --allowedTools makes the Artifact tool run without asking; every other permission still asks (and then the job times out).
SESSION="${DS_TMUX_SESSION:-claude}"
# tm: tmux, on the socket DS_TMUX_SOCKET when it is set. Sessions on different sockets are separate servers, with separate environments,
# which is how the logins of several organizations are tried at the same time.
tm() { tmux ${DS_TMUX_SOCKET:+-L "$DS_TMUX_SOCKET"} "$@"; }
TASK_DIR="$ROOT/.ds-task"

# ds_session_ensure: the session exists and is ready (the folder trust must have been accepted once, by a person).
# It is ready as soon as its input box shows, so a fast start is not slowed by a fixed wait.
ds_session_ensure() {
  if ! tm has-session -t "$SESSION" 2>/dev/null; then
    log "starting the interactive Claude session ($SESSION)"
    tm new-session -d -s "$SESSION" -x 200 -y 50 -c "$ROOT" "claude --allowedTools Artifact"
    local end=$(( $(date +%s) + 60 )) pane
    while [ "$(date +%s)" -lt "$end" ]; do
      pane="$(tm capture-pane -t "$SESSION" -p)"
      grep -q "trust this folder" <<<"$pane" && break
      grep -q "^❯" <<<"$pane" && break
      sleep 1
    done
  fi
  if tm capture-pane -t "$SESSION" -p | grep -q "trust this folder"; then
    log "the session waits for the folder trust: run on a protected branch, or provide CLAUDE_JSON_FILE (see scripts/ds/README.md)"
    return 1
  fi
}

# ds_send <task-name> <text>: writes the task to .ds-task/<name>.md and tells the session to do it, in a fresh context.
ds_send() {
  mkdir -p "$TASK_DIR"; printf '%s\n' "$2" > "$TASK_DIR/$1.md"
  tm send-keys -t "$SESSION" -l "/clear"; tm send-keys -t "$SESSION" Enter; sleep 3
  tm send-keys -t "$SESSION" -l "Do the task in ./.ds-task/$1.md exactly as written. Do nothing else."
  sleep 1; tm send-keys -t "$SESSION" Enter
}

# ds_pane: the last lines of the session, for the log when something is stuck.
ds_pane() { tm capture-pane -t "$SESSION" -p | grep -v '^$' | tail -"${1:-14}"; }

# ds_wait <seconds> <command...>: until the command succeeds. Returns 2 at once when the session asks for a permission.
ds_wait() {
  local end=$(( $(date +%s) + $1 )); shift
  while [ "$(date +%s)" -lt "$end" ]; do
    "$@" >/dev/null 2>&1 && return 0
    if tm capture-pane -t "$SESSION" -p | grep -qE "Do you want to|Allow this|don't ask again"; then
      log "the session asks for a permission, so the job cannot go on:"; ds_pane; return 2
    fi
    sleep 5
  done
  log "timeout, the session shows:"; ds_pane; return 1
}

# --- pipelines (a fresh container per job) ---------------------------------------------------------

# ds_ci_setup: what a fresh container needs before the session starts. The login is the token in CLAUDE_CODE_OAUTH_TOKEN
# (this function never prints it). A fresh Claude Code asks for the first-run settings and for the trust of the folder, and in a
# pipeline nobody answers. So ~/.claude.json is made here, from the first of these:
#   1. CLAUDE_JSON_FILE (a file variable): your own file, used as it is;
#   2. by default, a minimal one that marks the first run done and trusts this project folder, but only on a PROTECTED branch,
#      because only there the code that runs is code you reviewed and merged. DS_TRUST_FOLDER=0 turns this off;
#   3. otherwise nothing, and the session stops at the question (the job says so).
ds_ci_setup() {
  git config --global --add safe.directory "$ROOT"
  if [ -n "${CLAUDE_JSON_FILE:-}" ] && [ -f "$CLAUDE_JSON_FILE" ]; then
    cp "$CLAUDE_JSON_FILE" "$HOME/.claude.json"
  elif [ "${DS_TRUST_FOLDER:-1}" != "0" ] && [ "${CI_COMMIT_REF_PROTECTED:-}" = "true" ]; then
    ROOT="$ROOT" node -e '
      const fs = require("fs");
      fs.writeFileSync(process.env.HOME + "/.claude.json", JSON.stringify({
        hasCompletedOnboarding: true,
        projects: { [process.env.ROOT]: { hasTrustDialogAccepted: true } },
      }, null, 2) + "\n");'
    log "trusting the project folder $ROOT (a protected branch; set DS_TRUST_FOLDER=0 to turn this off)"
  else
    log "WARNING: no CLAUDE_JSON_FILE, and the folder is not trusted automatically (DS_TRUST_FOLDER=${DS_TRUST_FOLDER:-1}, protected branch: ${CI_COMMIT_REF_PROTECTED:-no}): the session will ask for the folder trust and the job will fail"
  fi
  [ ! -f "$HOME/.claude.json" ] || chmod 600 "$HOME/.claude.json"
  [ -n "${CLAUDE_CODE_OAUTH_TOKEN:-}" ] || log "WARNING: CLAUDE_CODE_OAUTH_TOKEN is not set"
}

# ds_preflight: the session starts, is not waiting for a person, and has the Artifact tool. Costs one tiny call, and stops a job
# at once, with the reason, instead of after the timeout.
ds_preflight() {
  ds_session_ensure || return 1
  tm send-keys -t "$SESSION" -l "/clear"; tm send-keys -t "$SESSION" Enter; sleep 3
  tm send-keys -t "$SESSION" -l "Use the Artifact tool: action list, scope mine, limit 1. Do nothing else. If you have no Artifact tool, say exactly: NO ARTIFACT TOOL."
  sleep 1; tm send-keys -t "$SESSION" Enter
  local pane end=$(( $(date +%s) + ${DS_PREFLIGHT_TIMEOUT:-180} ))
  while [ "$(date +%s)" -lt "$end" ]; do
    pane="$(tm capture-pane -t "$SESSION" -p -S -200)"
    if grep -q "Artifact(list" <<<"$pane" && ! grep -qE "^● .*(NO ARTIFACT TOOL|no tool named)" <<<"$pane"; then log "preflight ok: the session has the Artifact tool"; return 0; fi
    if grep -qE "^● .*(NO ARTIFACT TOOL|no tool named)" <<<"$pane"; then log "preflight failed: this login has no Artifact tool (is CLAUDE_CODE_OAUTH_TOKEN a full claude.ai login?)"; ds_pane; return 3; fi
    if grep -qiE "not logged in|please run /login|invalid (api key|token)|authentication" <<<"$pane"; then log "preflight failed: the session is not signed in"; ds_pane; return 4; fi
    sleep 3
  done
  log "preflight timed out, the session shows:"; ds_pane; return 1
}

# ds_session_reset: ends the tmux server, so the next session starts with the environment of that moment. tmux keeps the
# environment of the first session it started, so a session for another organization needs a new server (and its token).
ds_session_reset() { tm kill-server 2>/dev/null || true; }

# ds_probe <url>: one question to a fresh session that answers three things at once: the login is accepted, the session has the
# Artifact tool, and this design system can be reached with that login. The session lists the files of the design system and answers
# with one line that cannot be mistaken for the question: FILES=<n>, NOTOOL or FAILED (the answer line starts with "● ", the question
# does not). Returns 0 and prints the number of files; 3 no Artifact tool; 4 not signed in; 5 the design system cannot be reached;
# 1 no clear answer. It stops as soon as the session has finished its turn, so a failure is quick too.
ds_probe() {
  tm send-keys -t "$SESSION" -l "Use the Artifact tool: action list with scope files, url $1. Then answer with one line and nothing else: FILES=<n>, where <n> is the number of files listed. If you have no Artifact tool, answer NOTOOL. If the call fails, answer FAILED."
  sleep 1; tm send-keys -t "$SESSION" Enter
  local pane n end=$(( $(date +%s) + ${DS_PROBE_TIMEOUT:-90} ))
  while [ "$(date +%s)" -lt "$end" ]; do
    pane="$(tm capture-pane -t "$SESSION" -p -S -200)"
    if n="$(grep -oE "^● FILES=[0-9]+" <<<"$pane" | head -1 | cut -d= -f2)" && [ -n "$n" ]; then echo "$n"; return 0; fi
    if grep -qE "^● NOTOOL" <<<"$pane"; then return 3; fi
    if grep -qE "^● FAILED" <<<"$pane"; then return 5; fi
    if grep -qiE "not logged in|please run /login|invalid (api key|token)|authentication (rejected|failed)|\(401\)" <<<"$pane"; then return 4; fi
    # the turn is over and no answer line came: do not wait for it
    if grep -qE "· done [0-9]+:[0-9]+" <<<"$pane"; then return 1; fi
    sleep 2
  done
  return 1
}
