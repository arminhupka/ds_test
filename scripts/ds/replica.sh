#!/usr/bin/env bash
# A copy: publish the files of claude-ds/ (made by the source job) 1:1 to this organization's design system, read them back
# and compare the sums. Usage: replica.sh <org>
# DS_DRY_RUN=1 checks everything but publishes nothing (no login needed).
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/lib.sh"
cd "$ROOT"
ORG="${1:?org}"
# The link of this organization's design system: the project variable ARTIFACT_URL_<ORG>.
URL="$(ds_org_var ARTIFACT_URL "$ORG" | tr -d '[:space:]')"
[ -n "$URL" ] || { notify "design-sync $ORG" "no design system link: set ARTIFACT_URL_<ORG>"; exit 2; }
TIMEOUT="${DS_TASK_TIMEOUT:-900}"

(cd claude-ds && $SHA256 -c checksums.txt --quiet) || { notify "design-sync $ORG" "claude-ds/ does not match its checksums.txt: not published"; exit 1; }

if [ -n "${DS_DRY_RUN:-}" ]; then log "DS_DRY_RUN: claude-ds/ matches its checksums; would publish $(find claude-ds/project -type f | wc -l | tr -d ' ') files to $URL"; exit 0; fi

ds_session_ensure
VERIFY=".ds-verify/$ORG"; rm -rf "$VERIFY"
log "publishing claude-ds/project to $URL"
ds_send "replica-$ORG" "Use the Artifact tool. Artifact: $URL

1. Action read on that url (the tool refuses a publish when this session has not viewed the latest version), and read every local file you are about to publish (the tool requires it before publishing files you did not write).
2. Publish to that url with the files option: every file under ./claude-ds/project/ goes to project/<same relative path>, content unchanged. If the tool says 'files' also needs 'file_path' (the artifact is made from a type), pass the absolute path of one of the files you publish, for example project/README.md, as file_path. Publish nothing else. Do not touch SKILL.md, index.html or artifact-type/. Do not generate, rewrite or reformat any content.
3. Then read every file under project/ of that artifact with the paths option and out_dir ./$VERIFY, so they are saved as ./$VERIFY/project/...
4. Stop. Do nothing else."

same() { diff <(manifest claude-ds/project) <(manifest "$VERIFY/project"); }
if ds_wait "$TIMEOUT" same; then
  notify "design-sync $ORG" "published and verified ($(git rev-parse --short HEAD))"
else
  same | head -10 >&2 || true
  notify "design-sync $ORG" "the published files do not match claude-ds/"; exit 1
fi
