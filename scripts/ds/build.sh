#!/usr/bin/env bash
# Builds the design system from the sources, with no AI: the same input gives the same bytes.
# Output: ds-bundle/.artifact/project/ (the files of the artifact). Needs .ds-sync/, which /design-sync installs once.
set -euo pipefail
source "$(dirname "${BASH_SOURCE[0]}")/lib.sh"
cd "$ROOT"

[ -d .ds-sync ] || { echo ".ds-sync/ is missing: run /design-sync once on this machine" >&2; exit 2; }
TITLE="$(node -p "JSON.parse(require('fs').readFileSync('claude-ds/project/design-system.json','utf8')).title")"

npm run -s build -- --output-style=static >/dev/null
node .design-sync/make-shadow.mjs >/dev/null
node .ds-sync/package-build.mjs --config .design-sync/config.json --node-modules node_modules \
  --entry .design-sync/.cache/shadow/@mini-ui/base/dist/index.js --out ./ds-bundle >/dev/null
node .ds-sync/artifact-layout.mjs ds-bundle --title "$TITLE" >/dev/null
log "built ds-bundle/.artifact/project ($(find ds-bundle/.artifact/project -type f | wc -l | tr -d ' ') files)"
