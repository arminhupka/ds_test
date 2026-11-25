#!/usr/bin/env bash
# Watches origin/main and runs this machine's design-sync job when a file it depends on changed.
# A plain loop: it costs nothing while nothing changes, and needs no Claude session of its own.
#
#   watch.sh source  <org> [--once]   ORG1: the sources changed  -> source.sh
#   watch.sh replica <org> [--once]   ORG2/3: claude-ds/ changed  -> replica.sh
#
# The SHA of the last change this machine finished is kept in $DS_STATE_DIR/<org>.sha (default ~/.ds-sync),
# written only after the job succeeded; a failed job is retried every DS_RETRY seconds (default 1800).
set -u
source "$(dirname "${BASH_SOURCE[0]}")/lib.sh"
ROLE="${1:?usage: watch.sh <source|replica> <org> [--once]}"; ORG="${2:?org}"; ONCE="${3:-}"
case "$ROLE" in
  # What ORG1 builds from. Its own commits only touch claude-ds/, so they never retrigger it.
  source)  PATHS=(packages .storybook config .design-sync package.json package-lock.json) ;;
  replica) PATHS=(claude-ds) ;;
  *) echo "role must be source or replica" >&2; exit 2 ;;
esac
STATE="$STATE_DIR/$ORG.sha"; LOCK="$STATE_DIR/$ORG.lock"
INTERVAL="${DS_INTERVAL:-60}"; RETRY="${DS_RETRY:-1800}"
RUN="${DS_RUN_CMD:-$(dirname "${BASH_SOURCE[0]}")/$ROLE.sh}"

cd "$ROOT"
mkdir "$LOCK" 2>/dev/null || { log "a watcher for $ORG already runs ($LOCK)"; exit 1; }
trap 'rmdir "$LOCK" 2>/dev/null' EXIT

FAILED_SHA=""; FAILED_AT=0
while true; do
  if git fetch -q origin main; then
    NEW="$(git log -1 --format=%H origin/main -- "${PATHS[@]}")"
    DONE="$(cat "$STATE" 2>/dev/null || true)"; NOW="$(date +%s)"
    if [ -n "$NEW" ] && [ "$NEW" != "$DONE" ] && { [ "$NEW" != "$FAILED_SHA" ] || [ $((NOW - FAILED_AT)) -ge "$RETRY" ]; }; then
      log "change on main ($NEW): running $ROLE for $ORG"
      # Update the working copy here, before the job starts: a job that updates its own script file while it runs reads a mixed file.
      if git checkout -q main && git merge -q --ff-only origin/main; then
        if "$RUN" "$ORG" "$NEW"; then
          echo "$NEW" > "$STATE"; FAILED_SHA=""; log "done $NEW"
        else
          FAILED_SHA="$NEW"; FAILED_AT="$NOW"; notify "design-sync $ORG" "$ROLE job failed for ${NEW:0:7}; retry in ${RETRY}s"
        fi
      else
        FAILED_SHA="$NEW"; FAILED_AT="$NOW"; notify "design-sync $ORG" "cannot fast-forward main; retry in ${RETRY}s"
      fi
    fi
  else
    log "git fetch failed (network or VPN?)"
  fi
  [ -n "$ONCE" ] && break
  sleep "$INTERVAL"
done
