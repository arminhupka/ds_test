#!/usr/bin/env bash
# Checks the Claude login of every organization before anything is published, so a wrong token stops the pipeline at the start
# and not halfway (for example after the source was published and a copy cannot be). For the source organization (DS_SOURCE_ORG,
# default org1) and each organization in DS_COPY_ORGS it asks one question with that organization's CLAUDE_TOKEN_<ORG>, which
# answers three things at once: the token is accepted, the session has the Artifact tool, and the design system link
# (ARTIFACT_URL_<ORG>) can be reached with that login. The organizations are checked at the same time, each in a session of its
# own (own tmux socket and home), so the check takes as long as one organization. It never prints a token.
# Exit 1 when any organization fails. DS_DRY_RUN needs no login, so the check is skipped.
set -uo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/lib.sh"
cd "$ROOT"

on() { case "$(printf '%s' "${!1:-}" | tr 'A-Z' 'a-z')" in ''|0|false|no|off) return 1 ;; *) return 0 ;; esac; }
upper() { printf '%s' "$1" | tr 'a-z-' 'A-Z_'; }

if on DS_DRY_RUN; then echo "DS_DRY_RUN is set: no login is needed, so nothing is checked"; exit 0; fi

SOURCE="${DS_SOURCE_ORG:-org1}"
COPIES="$(printf '%s' "${DS_COPY_ORGS:-}" | tr ',' ' ')"
OUT="$(mktemp -d)"; trap 'rm -rf "$OUT" 2>/dev/null || true' EXIT

# check_org <org> <role>: writes "OK|<text>" or "FAILED|<text>" to $OUT/<org>. Runs in a subshell of its own.
check_org() {
  local org="$1" role="$2" var token url n code
  var="CLAUDE_TOKEN_$(upper "$org")"; token="$(ds_org_var CLAUDE_TOKEN "$org")"
  if [ -z "$token" ]; then echo "FAILED|$var is not set" > "$OUT/$org"; return; fi
  url="$(ds_org_var ARTIFACT_URL "$org")"
  if [ -z "$url" ] && [ "$role" = source ]; then url="$(node -p "JSON.parse(require('fs').readFileSync('.design-sync/artifact.json','utf8')).url" 2>/dev/null || true)"; fi
  if [ -z "$url" ]; then echo "FAILED|ARTIFACT_URL_$(upper "$org") is not set" > "$OUT/$org"; return; fi

  export CLAUDE_CODE_OAUTH_TOKEN="$token" DS_TMUX_SOCKET="ds-verify-$org" HOME="$OUT/home-$org"
  mkdir -p "$HOME"
  ds_ci_setup >/dev/null 2>&1
  if ! ds_session_ensure >/dev/null 2>&1; then
    echo "FAILED|the session waits for a person (folder trust?): run on a protected branch or provide CLAUDE_JSON_FILE" > "$OUT/$org"; tm kill-server 2>/dev/null; return
  fi
  n="$(ds_probe "$url")"; code=$?
  case "$code" in
    0) echo "OK|login works, Artifact tool available, design system reachable ($n files)" > "$OUT/$org" ;;
    3) echo "FAILED|this login has no Artifact tool: is $var a full claude.ai login (output of claude setup-token)?" > "$OUT/$org" ;;
    4) echo "FAILED|the token was not accepted: renew $var (claude setup-token)" > "$OUT/$org" ;;
    5) echo "FAILED|the design system cannot be reached with this login: check ARTIFACT_URL_$(upper "$org") and that it belongs to $org" > "$OUT/$org" ;;
    *) { echo "FAILED|no clear answer from the session of $org, it shows:"; tm capture-pane -t "$SESSION" -p -S -40 | grep -v '^$' | tail -8 | sed 's/^/        /'; } > "$OUT/$org" ;;
  esac
  tm kill-server 2>/dev/null
}

ORGS=("$SOURCE"); for ORG in $COPIES; do ORGS+=("$ORG"); done
log "checking the login of: ${ORGS[*]} (at the same time)"
check_org "$SOURCE" source &
for ORG in $COPIES; do check_org "$ORG" copy & done
wait

echo; echo "Claude login check"
FAILED=0
for ORG in "${ORGS[@]}"; do
  ROLE=copy; [ "$ORG" = "$SOURCE" ] && ROLE=source
  RES="$(cat "$OUT/$ORG" 2>/dev/null || echo 'FAILED|no result')"
  STATUS="${RES%%|*}"; TEXT="${RES#*|}"
  printf '  %-16s %-7s %s\n' "$ORG ($ROLE)" "$STATUS" "$TEXT"
  [ "$STATUS" = OK ] || FAILED=1
done
echo
if [ "$FAILED" -eq 0 ]; then echo "All logins work."; exit 0; fi
echo "At least one login does not work, so nothing is published. Fix the variables above in Settings > CI/CD > Variables (${CI_PROJECT_URL:-<your project>}/-/settings/ci_cd) and run the pipeline again."
exit 1
