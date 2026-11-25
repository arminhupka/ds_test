#!/usr/bin/env bash
# ORG2/ORG3, a copy: claude-ds/ changed on main -> publish its files 1:1 to this organization's artifact,
# read them back and compare the sums. Usage: replica.sh <org> [sha]
# The artifact is created once by hand; its link is kept in $STATE_DIR/<org>.url.
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/lib.sh"
cd "$ROOT"
ORG="${1:?org}"
URL_FILE="$STATE_DIR/$ORG.url"
[ -s "$URL_FILE" ] || { notify "design-sync $ORG" "missing $URL_FILE: put the link of this organization's artifact there"; exit 2; }
URL="$(tr -d '[:space:]' < "$URL_FILE")"
TIMEOUT="${DS_TASK_TIMEOUT:-900}"

git checkout -q main && git merge -q --ff-only origin/main
(cd claude-ds && $SHA256 -c checksums.txt --quiet) || { notify "design-sync $ORG" "claude-ds/ does not match its checksums.txt: not published"; exit 1; }

ds_session_ensure
VERIFY=".ds-verify/$ORG"; rm -rf "$VERIFY"
log "publishing claude-ds/project to $URL"
ds_send "replica-$ORG" "Use the Artifact tool. Artifact: $URL

1. Action read on that url (the tool refuses a publish when this session has not viewed the latest version), and read every local file you are about to publish (the tool requires it before publishing files you did not write).
2. Publish to that url with the files option: every file under ./claude-ds/project/ goes to project/<same relative path>, content unchanged. If the tool says `files` also needs `file_path` (the artifact is made from a type), pass the absolute path of one of the files you publish, for example project/README.md, as file_path. Publish nothing else. Do not touch SKILL.md, index.html or artifact-type/. Do not generate, rewrite or reformat any content.
3. Then read every file under project/ of that artifact with the paths option and out_dir ./$VERIFY, so they are saved as ./$VERIFY/project/...
4. Stop. Do nothing else."

same() { diff <(manifest claude-ds/project) <(manifest "$VERIFY/project"); }
if ds_wait "$TIMEOUT" same; then
  notify "design-sync $ORG" "published and verified ($(git rev-parse --short HEAD))"
else
  same | head -10 >&2 || true
  notify "design-sync $ORG" "the published files do not match claude-ds/"; exit 1
fi
