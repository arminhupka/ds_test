#!/usr/bin/env bash
# Starts the design-sync watcher of one organization. Needs: ORG, ROLE (source|replica), REPO_URL.
set -euo pipefail
: "${ORG:?}" "${ROLE:?}" "${REPO_URL:?}"

git config --global --add safe.directory '*'
git config --global user.name "ds-sync $ORG"
git config --global user.email "ds-sync-$ORG@localhost"

[ -d /work/repo/.git ] || git clone -q "$REPO_URL" /work/repo
cd /work/repo
git remote set-url origin "$REPO_URL"
git fetch -q origin main && git checkout -q main && git merge -q --ff-only origin/main

mkdir -p "$HOME/.ds-sync"
[ -z "${ARTIFACT_URL:-}" ] || echo "$ARTIFACT_URL" > "$HOME/.ds-sync/$ORG.url"

# The ORG1 build needs .ds-sync/ (installed by /design-sync, not in git). Take the scripts from the host copy
# and install its dependencies here, as the host's node_modules are for macOS.
if [ "$ROLE" = source ] && [ ! -d .ds-sync ] && [ -d /host-ds-sync ]; then
  echo "installing .ds-sync for Linux"
  mkdir .ds-sync && tar -C /host-ds-sync --exclude=node_modules -cf - . | tar -C .ds-sync -xf -
  (cd .ds-sync && npm ci --no-audit --no-fund >/dev/null 2>&1) || echo "WARNING: npm ci in .ds-sync failed"
fi

if [ "${1:-}" = "shell" ]; then exec bash; fi

until claude auth status >/dev/null 2>&1; do
  echo "[$ORG] not signed in. Run: docker compose exec -it $ORG claude   (then /login)"; sleep 30
done
echo "[$ORG] signed in; starting the $ROLE watcher"
exec scripts/ds/watch.sh "$ROLE" "$ORG"
