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

ds_session_ensure
VERIFY=".ds-verify/$ORG"; rm -rf "$VERIFY"
TIMEOUT="${DS_TASK_TIMEOUT:-900}"
log "publishing to $URL"
ds_send "source-$ORG" "Use the Artifact tool. Artifact: $URL

1. Action read on that url (the tool refuses a publish when this session has not viewed the latest version), and read every local file you are about to publish (the tool requires it before publishing files you did not write).
2. Publish to that url with the files option: every file under ./ds-bundle/.artifact/publish/ goes to project/<same relative path>, content unchanged. If the tool says `files` also needs `file_path` (the artifact is made from a type), pass the absolute path of one of the files you publish, for example project/README.md, as file_path. Publish nothing else. Do not touch SKILL.md, index.html or artifact-type/. Do not generate, rewrite or reformat any content.
3. Then read every file under project/ of that artifact with the paths option and out_dir ./$VERIFY, so they are saved as ./$VERIFY/project/...
4. Stop. Do nothing else."

# What the artifact holds now must equal what was built (the two metadata files aside).
same() { diff <(DS_IGNORE="^($VOLATILE)$" manifest "$PUB") <(DS_IGNORE="^($VOLATILE)$" manifest "$VERIFY/project"); }
if ! ds_wait "$TIMEOUT" same; then
  notify "design-sync $ORG" "the published files do not match the built ones: not committed"; exit 1
fi
rm -rf claude-ds/project && cp -R "$VERIFY/project" claude-ds/project
(cd claude-ds && find project -type f ! -name .DS_Store | sort | xargs $SHA256 > checksums.txt)
git add claude-ds
if git diff --cached --quiet; then log "claude-ds/ unchanged after the pull"; exit 0; fi
git commit -q -m "chore(ds): update claude-ds from the published design system" -m "Built by scripts/ds/source.sh and verified against the artifact."
git push -q origin main
notify "design-sync $ORG" "published and committed claude-ds ($(git rev-parse --short HEAD))"
