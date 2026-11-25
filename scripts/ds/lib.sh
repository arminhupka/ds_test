#!/usr/bin/env bash
# Shared helpers of the design-sync automation. Source it, do not run it.
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
STATE_DIR="${DS_STATE_DIR:-$HOME/.ds-sync}"
mkdir -p "$STATE_DIR"

# sha256 of files, in the format "<hash>  <path>": Linux has sha256sum, macOS has shasum.
if command -v sha256sum >/dev/null 2>&1; then SHA256="sha256sum"; else SHA256="shasum -a 256"; fi

log() { printf '%s  %s\n' "$(date '+%F %T')" "$*"; }

# notify <title> <message>: for now only the log; the one place to add Slack or any other channel later.
notify() { log "NOTIFY  $1: $2"; }

# manifest <dir>: "sha256  relative/path" for every file, sorted, without volatile files when DS_IGNORE is set.
manifest() {
  (cd "$1" && find . -type f ! -name .DS_Store | sed 's#^\./##' | sort | grep -vxE "${DS_IGNORE:-^$}" | while read -r f; do $SHA256 "$f"; done)
}

# claude_run <prompt>: a headless Claude run that may use only the Artifact tool.
claude_run() {
  claude -p "$1" --allowedTools "Artifact"
}
