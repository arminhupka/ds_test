#!/usr/bin/env bash
# One design-sync job of a pipeline (see .gitlab-ci.yml). Usage: ci-job.sh <source|replica> <org>
#   source  : the source organization. Builds, publishes, verifies, and passes claude-ds/ on as a job artifact.
#   replica : another organization. Publishes claude-ds/ 1:1 and verifies, unless the source reported no change.
# Settings of an organization are project variables named after it (see ds_org_var): CLAUDE_TOKEN_<ORG> (its login),
# ARTIFACT_URL_<ORG> (its design system). Also CLAUDE_JSON_FILE (see lib.sh) and DS_TITLE (the name of the design system). DS_DRY_RUN=1 runs everything but the login and the publish (to try a pipeline without tokens).
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/lib.sh"
cd "$ROOT"
ROLE="${1:?usage: ci-job.sh <source|replica> <org>}"; ORG="${2:?org}"

# This organization's login: CLAUDE_TOKEN_<ORG> becomes the token the session uses.
TOKEN="$(ds_org_var CLAUDE_TOKEN "$ORG")"
if [ -n "$TOKEN" ]; then export CLAUDE_CODE_OAUTH_TOKEN="$TOKEN"
elif [ -z "${DS_DRY_RUN:-}" ]; then log "CLAUDE_TOKEN_$(printf '%s' "$ORG" | tr 'a-z-' 'A-Z_') is not set: add it as a project variable"; exit 2; fi

# The build folder of a runner belongs to another user than the job, and git refuses such a folder until it is allowed.
git config --global --add safe.directory "$ROOT"

# The job collects these folders as artifacts; a marker keeps a skipped job from ending with "No files to upload".
mkdir -p .ds-verify .ds-task && : > .ds-verify/.keep && : > .ds-task/.keep

# fetch_baseline: "did the design system change?" is answered against claude-ds/ of the last successful pipeline (the artifact of
# the job DS_BASELINE_JOB on the default branch), because the design system is not kept in git.
# Needs unzip. When there is no such artifact (a first run, an expired one) and no claude-ds/ is committed, there is no
# baseline and the design system counts as changed.
fetch_baseline() {
  local api="${DS_API_URL:-${CI_API_V4_URL:-}}" zip tmp
  [ -n "${CI_JOB_TOKEN:-}" ] && [ -n "$api" ] || return 0
  zip="$(mktemp)"; tmp="$(mktemp -d)"
  if curl -fsS --header "JOB-TOKEN: $CI_JOB_TOKEN" -o "$zip" \
       "$api/projects/$CI_PROJECT_ID/jobs/artifacts/${CI_DEFAULT_BRANCH:-main}/download?job=${DS_BASELINE_JOB:-publish-source}" 2>/dev/null \
     && unzip -q "$zip" 'claude-ds/*' -d "$tmp" 2>/dev/null && [ -d "$tmp/claude-ds/project" ]; then
    rm -rf claude-ds && mv "$tmp/claude-ds" claude-ds
    log "baseline: claude-ds/ taken from the last successful pipeline"
  else
    if [ -d claude-ds/project ]; then log "baseline: no earlier pipeline artifact, using claude-ds/ from the repository"
    else log "baseline: no earlier pipeline artifact and no claude-ds/ in the repository: the design system counts as changed"; fi
  fi
  rm -rf "$zip" "$tmp"
}

case "$ROLE" in
  source) JOB=source.sh
    fetch_baseline ;;
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
