#!/usr/bin/env bash
# One design-sync job of a pipeline (see .gitlab-ci.yml). Usage: ci-job.sh <source|replica> <org>
#   source  : ORG1. Builds, publishes, verifies, and passes claude-ds/ on (and pushes it when DS_PUSH_TOKEN is set).
#   replica : another organization. Publishes claude-ds/ 1:1 and verifies, unless the source reported no change.
# Needs: CLAUDE_CODE_OAUTH_TOKEN (the login of this organization), CLAUDE_JSON_FILE or CLAUDE_JSON_B64 (see lib.sh),
# for replica also ARTIFACT_URL. DS_DRY_RUN=1 runs everything but the login and the publish (to try a pipeline without tokens).
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/lib.sh"
cd "$ROOT"
ROLE="${1:?usage: ci-job.sh <source|replica> <org>}"; ORG="${2:?org}"

# The build folder of a runner belongs to another user than the job, and git refuses such a folder until it is allowed.
git config --global --add safe.directory "$ROOT"

case "$ROLE" in
  source) JOB=source.sh
    if [ -z "${DS_PUSH_TOKEN:-}" ]; then export DS_NO_PUSH=1; log "no DS_PUSH_TOKEN: claude-ds/ is passed on as a job artifact only, not pushed"; fi ;;
  replica) JOB=replica.sh
    # DS_CHANGED comes from the source job (a dotenv report). A job started by hand with DS_FORCE=1 publishes anyway.
    if [ "${DS_CHANGED:-1}" != "1" ] && [ -z "${DS_FORCE:-}" ]; then log "the source reported no change: nothing to do for $ORG"; exit 0; fi ;;
  *) echo "role must be source or replica" >&2; exit 2 ;;
esac

# The build needs .ds-sync/ (the sync tool, installed by /design-sync, not kept in git). The source job takes it from DS_TOOL_SRC
# (default /host-ds-sync: a folder the runner mounts or the image holds) and installs its dependencies for this platform.
if [ "$ROLE" = source ] && [ ! -d .ds-sync ]; then
  SRC="${DS_TOOL_SRC:-/host-ds-sync}"
  if [ -d "$SRC" ]; then
    log "installing .ds-sync from $SRC"; mkdir .ds-sync && tar -C "$SRC" --exclude=node_modules -cf - . | tar -C .ds-sync -xf -
    (cd .ds-sync && npm ci --no-audit --no-fund >/dev/null 2>&1) || { log ".ds-sync: npm ci failed"; exit 1; }
  else
    log ".ds-sync/ is missing and DS_TOOL_SRC ($SRC) does not exist: run /design-sync once and give the folder to the runner or the image"; exit 2
  fi
fi

if [ -n "${DS_DRY_RUN:-}" ]; then
  log "DS_DRY_RUN: no login, no session; the job checks everything up to the publish"
else
  ds_ci_setup
  ds_preflight
fi
exec "$(dirname "${BASH_SOURCE[0]}")/$JOB" "$ORG"
