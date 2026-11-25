#!/usr/bin/env bash
# ORG2/ORG3, a copy: claude-ds/ changed on main -> publish its files 1:1 to this organization's artifact
# and verify the sums. Usage: replica.sh <org> [sha]
# The artifact is created once by hand; its link is kept in $STATE_DIR/<org>.url.
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/lib.sh"
cd "$ROOT"
ORG="${1:?org}"
URL_FILE="$STATE_DIR/$ORG.url"
[ -s "$URL_FILE" ] || { notify "design-sync $ORG" "missing $URL_FILE: put the link of this organization's artifact there"; exit 2; }
URL="$(tr -d '[:space:]' < "$URL_FILE")"

git checkout -q main && git merge -q --ff-only origin/main
(cd claude-ds && $SHA256 -c checksums.txt --quiet) || { notify "design-sync $ORG" "claude-ds/ does not match its checksums.txt: not published"; exit 1; }

log "publishing claude-ds/project to $URL"
claude_run "Use the Artifact tool. Artifact: $URL.
1. Action list with scope files, so the files are known to this session.
2. Publish to that url with the files option: every file under ./claude-ds/project/ goes to project/<same relative path>, content unchanged. Publish nothing else. Do not touch SKILL.md, index.html or artifact-type/. Do not generate, rewrite or reformat any content.
3. Print one line: published N files." >/dev/null

VERIFY=".ds-verify/$ORG"; rm -rf "$VERIFY"; mkdir -p "$VERIFY"
claude_run "Use the Artifact tool. Artifact: $URL.
List its files, then read every file under project/ with the paths option and out_dir ./$VERIFY. Do not read or save anything else. Print the saved paths." >/dev/null

if diff <(manifest claude-ds/project) <(manifest "$VERIFY/project") >/dev/null; then
  notify "design-sync $ORG" "published and verified ($(git rev-parse --short HEAD))"
else
  diff <(manifest claude-ds/project) <(manifest "$VERIFY/project") | head -10 >&2
  notify "design-sync $ORG" "published files differ from claude-ds/: see the log"; exit 1
fi
