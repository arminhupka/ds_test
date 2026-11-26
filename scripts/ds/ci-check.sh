#!/usr/bin/env bash
# The first job of the pipeline: checks that every project variable the run needs is set, and says which one is missing and
# where to add it. It never prints a value. DS_DRY_RUN=1 needs no tokens and no design system links.
#   source organization  (DS_SOURCE_ORG, default org1):  CLAUDE_TOKEN_<ORG>
#   each copy            (DS_COPY_ORGS):                  CLAUDE_TOKEN_<ORG> and ARTIFACT_URL_<ORG>
#   always (a real run):                                  CLAUDE_JSON_FILE
set -uo pipefail

upper() { printf '%s' "$1" | tr 'a-z-' 'A-Z_'; }
set_in() { [ -n "${!1:-}" ]; }   # is the variable set (never prints it)?

SOURCE="${DS_SOURCE_ORG:-org1}"
COPIES="$(printf '%s' "${DS_COPY_ORGS:-}" | tr ',' ' ')"
MISSING=()
need() { set_in "$1" || MISSING+=("$1|$2"); }

if [ -z "${DS_DRY_RUN:-}" ]; then
  need "CLAUDE_TOKEN_$(upper "$SOURCE")" "the login of the source organization '$SOURCE': run \`claude setup-token\` signed in as its account (masked, protected)"
  for ORG in $COPIES; do
    need "CLAUDE_TOKEN_$(upper "$ORG")" "the login of '$ORG': run \`claude setup-token\` signed in as its account (masked, protected)"
    need "ARTIFACT_URL_$(upper "$ORG")" "the link of the design system of '$ORG' (it must already exist)"
  done
  need "CLAUDE_JSON_FILE" "first-run and folder-trust settings (type: File), see scripts/ds/README.md"
fi
[ -n "${DS_COPY_ORGS:-}" ] || echo "note: DS_COPY_ORGS is empty, so the design system is published to '$SOURCE' only"
[ -z "${DS_DRY_RUN:-}" ] || echo "note: DS_DRY_RUN is set: no tokens are needed and nothing is published"

if [ "${#MISSING[@]}" -eq 0 ]; then
  echo "all project variables are set (source: $SOURCE; copies: ${COPIES:-none})"; exit 0
fi

echo "Missing project variables:"
for M in "${MISSING[@]}"; do printf '  %-26s %s\n' "${M%%|*}" "${M#*|}"; done
echo
echo "Add them at: ${CI_PROJECT_URL:-<your project>}/-/settings/ci_cd   (Settings > CI/CD > Variables > Add variable)"
exit 1
