#!/usr/bin/env bash
# Shared helpers of the design-sync automation. Source it, do not run it.
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
STATE_DIR="${DS_STATE_DIR:-$HOME/.ds-sync}"
mkdir -p "$STATE_DIR"

log() { printf '%s  %s\n' "$(date '+%F %T')" "$*"; }

# notify <title> <message>: the log, a macOS notification, and Slack when DS_SLACK_WEBHOOK is set.
notify() {
  log "NOTIFY  $1: $2"
  if [ -n "${DS_SLACK_WEBHOOK:-}" ]; then
    curl -fsS -X POST -H 'Content-type: application/json' --data "{\"text\":\"$1: $2\"}" "$DS_SLACK_WEBHOOK" >/dev/null || true
  fi
  if command -v osascript >/dev/null 2>&1; then
    osascript -e "display notification \"$2\" with title \"$1\"" >/dev/null 2>&1 || true
  fi
}

# manifest <dir>: "sha256  relative/path" for every file, sorted, without volatile files when DS_IGNORE is set.
manifest() {
  (cd "$1" && find . -type f ! -name .DS_Store | sed 's#^\./##' | sort | grep -vxE "${DS_IGNORE:-^$}" | while read -r f; do shasum -a 256 "$f"; done)
}

# claude_run <prompt>: a headless Claude run that may use only the Artifact tool.
claude_run() {
  claude -p "$1" --allowedTools "Artifact"
}
