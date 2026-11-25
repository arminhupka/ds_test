#!/usr/bin/env bash
# Shared helpers of the design-sync automation. Source it, do not run it.
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
STATE_DIR="${DS_STATE_DIR:-$HOME/.ds-sync}"
mkdir -p "$STATE_DIR"

# sha256 of files, in the format "<hash>  <path>": Linux has sha256sum, macOS has shasum.
if command -v sha256sum >/dev/null 2>&1; then SHA256="sha256sum"; else SHA256="shasum -a 256"; fi

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
TASK_DIR="$ROOT/.ds-task"

# ds_session_ensure: the session exists and is ready (the folder trust must have been accepted once, by a person).
ds_session_ensure() {
  if ! tmux has-session -t "$SESSION" 2>/dev/null; then
    log "starting the interactive Claude session ($SESSION)"
    tmux new-session -d -s "$SESSION" -x 200 -y 50 -c "$ROOT" "claude --allowedTools Artifact"
    sleep 10
  fi
  if tmux capture-pane -t "$SESSION" -p | grep -q "trust this folder"; then
    log "the session waits for the folder trust. Attach once and choose Yes: docker compose exec -it <org> tmux attach -t $SESSION (detach: Ctrl+b d)"
    return 1
  fi
}

# ds_send <task-name> <text>: writes the task to .ds-task/<name>.md and tells the session to do it, in a fresh context.
ds_send() {
  mkdir -p "$TASK_DIR"; printf '%s\n' "$2" > "$TASK_DIR/$1.md"
  tmux send-keys -t "$SESSION" -l "/clear"; tmux send-keys -t "$SESSION" Enter; sleep 3
  tmux send-keys -t "$SESSION" -l "Do the task in ./.ds-task/$1.md exactly as written. Do nothing else."
  sleep 1; tmux send-keys -t "$SESSION" Enter
}

# ds_pane: the last lines of the session, for the log when something is stuck.
ds_pane() { tmux capture-pane -t "$SESSION" -p | grep -v '^$' | tail -"${1:-14}"; }

# ds_wait <seconds> <command...>: until the command succeeds. Returns 2 at once when the session asks for a permission.
ds_wait() {
  local end=$(( $(date +%s) + $1 )); shift
  while [ "$(date +%s)" -lt "$end" ]; do
    "$@" >/dev/null 2>&1 && return 0
    if tmux capture-pane -t "$SESSION" -p | grep -qE "Do you want to|Allow this|don't ask again"; then
      log "the session asks for a permission, so the job cannot go on:"; ds_pane; return 2
    fi
    sleep 5
  done
  log "timeout, the session shows:"; ds_pane; return 1
}
