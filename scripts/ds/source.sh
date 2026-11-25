#!/usr/bin/env bash
# ORG1, the source: the sources changed on main -> build, publish to the ORG1 artifact, pull the result
# back into claude-ds/ and commit it. Usage: source.sh <org> [sha]
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/lib.sh"
cd "$ROOT"
ORG="${1:?org}"
URL="$(node -p "JSON.parse(require('fs').readFileSync('.design-sync/artifact.json','utf8')).url")"
VOLATILE='design-system\.json|_ds_sync\.json'

git checkout -q main && git merge -q --ff-only origin/main
npm ci --no-audit --no-fund >/dev/null 2>&1
"$(dirname "${BASH_SOURCE[0]}")/build.sh"

# Nothing to publish when everything but the two metadata files is already what claude-ds/ holds.
if diff <(DS_IGNORE="^($VOLATILE)$" manifest ds-bundle/.artifact/project) <(DS_IGNORE="^($VOLATILE)$" manifest claude-ds/project) >/dev/null; then
  log "design system unchanged: nothing to publish"; exit 0
fi

# The files to publish: the built ones, with the metadata of the existing design-system.json updated.
PUB=ds-bundle/.artifact/publish; rm -rf "$PUB"; mkdir -p "$PUB"; cp -R ds-bundle/.artifact/project/. "$PUB/"
node -e '
const fs=require("fs"); const old=JSON.parse(fs.readFileSync("claude-ds/project/design-system.json","utf8"));
const d=JSON.parse(fs.readFileSync(process.argv[1],"utf8"));
d.createdOnFiles=old.createdOnFiles; d.editing=old.editing||"code";
d.lastChange={by:old.lastChange?.by||"automation",at:new Date().toISOString(),via:"scripts/ds/source.sh",note:"Synced from the design system code"};
fs.writeFileSync(process.argv[1],JSON.stringify(d,null,2)+"\n");' "$PUB/design-system.json"

log "publishing to $URL"
claude_run "Use the Artifact tool. Artifact: $URL.
1. Action list with scope files, so the files are known to this session.
2. Publish to that url with the files option: every file under ./ds-bundle/.artifact/publish/ goes to project/<same relative path>, content unchanged. Publish nothing else. Do not touch SKILL.md, index.html or artifact-type/. Do not generate, rewrite or reformat any content.
3. Print one line: published N files." >/dev/null

log "pulling the published files back into claude-ds/"
claude_run "Use the Artifact tool. Artifact: $URL.
List its files, then read every file under project/ with the paths option and out_dir ./claude-ds. Do not read or save anything else. Print the saved paths." >/dev/null

# Verify: what is in the artifact now must equal what was built (metadata files aside).
if ! diff <(DS_IGNORE="^($VOLATILE)$" manifest "$PUB") <(DS_IGNORE="^($VOLATILE)$" manifest claude-ds/project) >/dev/null; then
  notify "design-sync $ORG" "published files differ from the built ones: not committed"; exit 1
fi
(cd claude-ds && find project -type f ! -name .DS_Store | sort | xargs $SHA256 > checksums.txt)
git add claude-ds
if git diff --cached --quiet; then log "claude-ds/ unchanged after the pull"; exit 0; fi
git commit -q -m "chore(ds): update claude-ds from the published design system" -m "Built by scripts/ds/source.sh and verified against the artifact."
git push -q origin main
notify "design-sync $ORG" "published and committed claude-ds ($(git rev-parse --short HEAD))"
