#!/usr/bin/env bash
# One design-sync job of a pipeline (see .gitlab-ci.yml). Usage: ci-job.sh <source|replica> <org>
#   source  : ORG1. Builds, publishes, verifies, and passes claude-ds/ on (and pushes it when DS_PUSH_TOKEN is set).
#   replica : another organization. Publishes claude-ds/ 1:1 and verifies, unless the source reported no change.
# Needs: CLAUDE_CODE_OAUTH_TOKEN (the login of this organization), CLAUDE_JSON_FILE or CLAUDE_JSON_B64 (see lib.sh),
# for replica also ARTIFACT_URL.
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/lib.sh"
cd "$ROOT"
ROLE="${1:?usage: ci-job.sh <source|replica> <org>}"; ORG="${2:?org}"

case "$ROLE" in
  source) JOB=source.sh
    if [ -z "${DS_PUSH_TOKEN:-}" ]; then export DS_NO_PUSH=1; log "no DS_PUSH_TOKEN: claude-ds/ is passed on as a job artifact only, not pushed"; fi ;;
  replica) JOB=replica.sh
    # DS_CHANGED comes from the source job (a dotenv report). A job started by hand with DS_FORCE=1 publishes anyway.
    if [ "${DS_CHANGED:-1}" != "1" ] && [ -z "${DS_FORCE:-}" ]; then log "the source reported no change: nothing to do for $ORG"; exit 0; fi ;;
  *) echo "role must be source or replica" >&2; exit 2 ;;
esac

ds_ci_setup
ds_preflight
exec "$(dirname "${BASH_SOURCE[0]}")/$JOB" "$ORG"
