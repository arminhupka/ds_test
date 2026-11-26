#!/usr/bin/env bash
# ORG2/ORG3, a copy: claude-ds/ changed on main -> publish its files 1:1 to this organization's artifact,
# read them back and compare the sums. Usage: replica.sh <org> [sha]
# The artifact is created once by hand; its link is kept in $STATE_DIR/<org>.url.
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/lib.sh"
cd "$ROOT"
ORG="${1:?org}"
# The link of this organization's artifact: ARTIFACT_URL (a pipeline variable), else the file kept by the watcher setup.
URL_FILE="$STATE_DIR/$ORG.url"
if [ -n "$(ds_org_var ARTIFACT_URL "$ORG")" ]; then URL="$(ds_org_var ARTIFACT_URL "$ORG" | tr -d '[:space:]')"
elif [ -n "${ARTIFACT_URL:-}" ]; then URL="$(printf '%s' "$ARTIFACT_URL" | tr -d '[:space:]')"
elif [ -s "$URL_FILE" ]; then URL="$(tr -d '[:space:]' < "$URL_FILE")"
else notify "design-sync $ORG" "no artifact link: set ARTIFACT_URL_<ORG> or put the link in $URL_FILE"; exit 2; fi
TIMEOUT="${DS_TASK_TIMEOUT:-900}"

# main is brought up to date by watch.sh before this job starts.
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
