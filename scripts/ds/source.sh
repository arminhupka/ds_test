#!/usr/bin/env bash
# ORG1, the source: the sources changed on main -> build, publish to the ORG1 artifact, pull the result
# back into claude-ds/ and commit it. Usage: source.sh <org> [sha]
# For trying it out: DS_FORCE=1 publishes even when nothing changed, DS_NO_COMMIT=1 leaves the repo untouched.
# In a pipeline: DS_ENV_FILE=<file> gets DS_CHANGED=0|1 for the next jobs; DS_NO_PUSH=1 updates claude-ds/ in the working
# tree only (it is passed on as a job artifact); DS_PUSH_URL=<url> (+ DS_PUSH_TOKEN) is where claude-ds/ is pushed (main), instead of origin.
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/lib.sh"
cd "$ROOT"
ORG="${1:?org}"
# The link of this organization's design system: ARTIFACT_URL_<ORG>, else the one recorded by /design-sync.
URL="$(ds_org_var ARTIFACT_URL "$ORG")"
[ -n "$URL" ] || URL="$(node -p "JSON.parse(require('fs').readFileSync('.design-sync/artifact.json','utf8')).url")"
VOLATILE='design-system\.json|_ds_sync\.json'
START_SHA="$(git rev-parse HEAD)"
# mark <0|1>: tells the next jobs of a pipeline whether the design system changed.
mark() { if [ -n "${DS_ENV_FILE:-}" ]; then printf 'DS_CHANGED=%s\n' "$1" > "$DS_ENV_FILE"; fi; return 0; }

# main is brought up to date by watch.sh before this job starts.
npm ci --no-audit --no-fund >/dev/null 2>&1
"$(dirname "${BASH_SOURCE[0]}")/build.sh"

# Nothing to publish when everything but the two metadata files is already what the baseline claude-ds/ holds. Without a
# baseline (no folder: a first run, an expired artifact) the design system counts as changed.
if [ -z "${DS_FORCE:-}" ] && [ -d claude-ds/project ] && diff <(DS_IGNORE="^($VOLATILE)$" manifest ds-bundle/.artifact/project) <(DS_IGNORE="^($VOLATILE)$" manifest claude-ds/project) >/dev/null; then
  log "design system unchanged: nothing to publish"; mark 0; exit 0
fi

# Trying a pipeline without a login: everything up to here ran for real; the publish does not.
if [ -n "${DS_DRY_RUN:-}" ]; then
  log "DS_DRY_RUN: would publish $(find ds-bundle/.artifact/project -type f | wc -l | tr -d ' ') files to $URL"
  # What a real run leaves for the copy jobs: the design system as it would be published, with its sums.
  rm -rf claude-ds/project; mkdir -p claude-ds; cp -R ds-bundle/.artifact/project claude-ds/project
  (cd claude-ds && find project -type f ! -name .DS_Store | sort | xargs $SHA256 > checksums.txt)
  mark 1; exit 0
fi

# The files to publish: the built ones, with the metadata of the existing design-system.json updated.
PUB=ds-bundle/.artifact/publish; rm -rf "$PUB"; mkdir -p "$PUB"; cp -R ds-bundle/.artifact/project/. "$PUB/"
node -e '
const fs=require("fs"); const p="claude-ds/project/design-system.json";
const old=fs.existsSync(p)?JSON.parse(fs.readFileSync(p,"utf8")):{};
const d=JSON.parse(fs.readFileSync(process.argv[1],"utf8"));
d.createdOnFiles=old.createdOnFiles||{at:new Date().toISOString(),v:1}; d.editing=old.editing||"code";
d.lastChange={by:old.lastChange?.by||"design-sync",at:new Date().toISOString(),via:"scripts/ds/source.sh",note:"Synced from the design system code"};
fs.writeFileSync(process.argv[1],JSON.stringify(d,null,2)+"\n");' "$PUB/design-system.json"

ds_session_ensure
VERIFY=".ds-verify/$ORG"; rm -rf "$VERIFY"
TIMEOUT="${DS_TASK_TIMEOUT:-900}"
log "publishing to $URL"
ds_send "source-$ORG" "Use the Artifact tool. Artifact: $URL

1. Action read on that url (the tool refuses a publish when this session has not viewed the latest version), and read every local file you are about to publish (the tool requires it before publishing files you did not write).
2. Publish to that url with the files option: every file under ./ds-bundle/.artifact/publish/ goes to project/<same relative path>, content unchanged. If the tool says 'files' also needs 'file_path' (the artifact is made from a type), pass the absolute path of one of the files you publish, for example project/README.md, as file_path. Publish nothing else. Do not touch SKILL.md, index.html or artifact-type/. Do not generate, rewrite or reformat any content.
3. Then read every file under project/ of that artifact with the paths option and out_dir ./$VERIFY, so they are saved as ./$VERIFY/project/...
4. Stop. Do nothing else."

# What the artifact holds now must equal what was built (the two metadata files aside).
same() { diff <(DS_IGNORE="^($VOLATILE)$" manifest "$PUB") <(DS_IGNORE="^($VOLATILE)$" manifest "$VERIFY/project"); }
if ! ds_wait "$TIMEOUT" same; then
  notify "design-sync $ORG" "the published files do not match the built ones: not committed"; exit 1
fi
rm -rf claude-ds/project && cp -R "$VERIFY/project" claude-ds/project
mark 1
if [ -n "${DS_NO_COMMIT:-}" ]; then   # for trying the job out: publish and verify, but leave the repo as it was
  git checkout -q -- claude-ds 2>/dev/null || true; notify "design-sync $ORG" "published and verified (DS_NO_COMMIT: nothing committed)"; exit 0
fi
(cd claude-ds && find project -type f ! -name .DS_Store | sort | xargs $SHA256 > checksums.txt)
if [ -n "${DS_NO_PUSH:-}" ]; then notify "design-sync $ORG" "published and verified (DS_NO_PUSH: claude-ds/ updated here, not committed)"; exit 0; fi
git add -f claude-ds   # the folder is ignored by git: committing it is the opt-in mode of DS_PUSH_TOKEN
if git diff --cached --quiet; then log "claude-ds/ unchanged after the pull"; exit 0; fi
git commit -q -m "chore(ds): update claude-ds from the published design system [skip ci]" -m "Built by scripts/ds/source.sh and verified against the artifact."
if [ -n "${DS_PUSH_TOKEN:-}" ]; then   # a pipeline: the token goes in a header, never in the URL, so it cannot show up in a message
  AUTH="Authorization: Basic $(printf 'oauth2:%s' "$DS_PUSH_TOKEN" | base64 | tr -d '\n')"
  PUSH=(git -c "http.extraHeader=$AUTH" push -q "${DS_PUSH_URL:?DS_PUSH_URL is needed with DS_PUSH_TOKEN}" HEAD:main)
elif [ -n "${DS_PUSH_URL:-}" ]; then PUSH=(git push -q "$DS_PUSH_URL" HEAD:main)
else PUSH=(git push -q origin main); fi
if ! "${PUSH[@]}"; then
  # Keep the clone able to fast-forward: drop the local commit. The artifact is already published; claude-ds/ in the repo is not.
  git reset -q --hard "$START_SHA"
  notify "design-sync $ORG" "published, but claude-ds/ could not be pushed (does this clone have write access?)"; exit 1
fi
notify "design-sync $ORG" "published and committed claude-ds ($(git rev-parse --short HEAD))"
