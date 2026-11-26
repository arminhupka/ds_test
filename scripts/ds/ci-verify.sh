#!/usr/bin/env bash
# Checks the Claude login of every organization before anything is published, so a wrong token stops the pipeline at the start
# and not halfway (for example after the source was published and a copy cannot be). For the source organization (DS_SOURCE_ORG,
# default org1) and each organization in DS_COPY_ORGS it checks, with that organization's CLAUDE_TOKEN_<ORG>:
#   1. the token logs in (the session starts and is not waiting for a person),
#   2. the session has the Artifact tool,
#   3. the design system link (ARTIFACT_URL_<ORG>) can be reached with that login.
# It never prints a token. Exit 1 when any organization fails. DS_DRY_RUN needs no login, so the check is skipped.
set -uo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/lib.sh"
cd "$ROOT"

on() { case "$(printf '%s' "${!1:-}" | tr 'A-Z' 'a-z')" in ''|0|false|no|off) return 1 ;; *) return 0 ;; esac; }
upper() { printf '%s' "$1" | tr 'a-z-' 'A-Z_'; }

if on DS_DRY_RUN; then echo "DS_DRY_RUN is set: no login is needed, so nothing is checked"; exit 0; fi

SOURCE="${DS_SOURCE_ORG:-org1}"
COPIES="$(printf '%s' "${DS_COPY_ORGS:-}" | tr ',' ' ')"
RESULTS=(); FAILED=0

record() { RESULTS+=("$(printf '  %-14s %-7s %s' "$1" "$2" "$3")"); [ "$2" = "OK" ] || FAILED=1; }

verify_org() {   # <org> <source|copy>
  local org="$1" role="$2" var token url
  var="CLAUDE_TOKEN_$(upper "$org")"; token="$(ds_org_var CLAUDE_TOKEN "$org")"
  if [ -z "$token" ]; then record "$org ($role)" FAILED "$var is not set"; return; fi
  url="$(ds_org_var ARTIFACT_URL "$org")"
  if [ -z "$url" ] && [ "$role" = source ]; then url="$(node -p "JSON.parse(require('fs').readFileSync('.design-sync/artifact.json','utf8')).url" 2>/dev/null || true)"; fi
  if [ -z "$url" ]; then record "$org ($role)" FAILED "ARTIFACT_URL_$(upper "$org") is not set"; return; fi

  log "checking $org ($role)"
  ds_session_reset
  export CLAUDE_CODE_OAUTH_TOKEN="$token"
  ds_ci_setup >/dev/null 2>&1
  local code=0
  ds_preflight || code=$?
  case "$code" in
    0) ;;
    3) record "$org ($role)" FAILED "this login has no Artifact tool: is $var a full claude.ai login (output of claude setup-token)?"; return ;;
    4) record "$org ($role)" FAILED "the token was not accepted: renew $var (claude setup-token)"; return ;;
    *) record "$org ($role)" FAILED "the session did not start or is waiting for a person (folder trust?), see the log above"; return ;;
  esac
  if ds_check_artifact "$url"; then record "$org ($role)" OK "login works, Artifact tool available, design system reachable"
  else record "$org ($role)" FAILED "the design system cannot be reached with this login: check ARTIFACT_URL_$(upper "$org") and that it belongs to $org"; fi
}

verify_org "$SOURCE" source
for ORG in $COPIES; do verify_org "$ORG" copy; done
ds_session_reset

echo
echo "Claude login check"
printf '%s\n' "${RESULTS[@]}"
echo
if [ "$FAILED" -eq 0 ]; then echo "All logins work."; exit 0; fi
echo "At least one login does not work, so nothing is published. Fix the variables above in Settings > CI/CD > Variables (${CI_PROJECT_URL:-<your project>}/-/settings/ci_cd) and run the pipeline again."
exit 1
