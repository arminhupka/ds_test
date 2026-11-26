#!/usr/bin/env bash
# Prints the pipeline that copies the design system to the other organizations: one job per name in DS_COPY_ORGS
# (a project variable, names separated by commas or spaces, for example "org2,org3"). Used by the plan-distribution job.
# Each job reads the settings of its organization from project variables named after it: CLAUDE_TOKEN_<ORG>, ARTIFACT_URL_<ORG>.
set -euo pipefail
ORGS="$(printf '%s' "${DS_COPY_ORGS:-}" | tr ',' ' ')"

cat <<'YAML'
stages: [distribute]
YAML

COUNT=0
for ORG in $ORGS; do
  [[ "$ORG" =~ ^[a-z0-9][a-z0-9_-]*$ ]] || { echo "DS_COPY_ORGS: '$ORG' is not a valid name (lowercase letters, digits, - and _)" >&2; exit 2; }
  COUNT=$((COUNT + 1))
  cat <<YAML

distribute-$ORG:
  stage: distribute
  image:
    name: \$DS_IMAGE
    entrypoint: [""]
  resource_group: design-sync
  interruptible: false
  timeout: 40m
  needs:
    - pipeline: \$PARENT_PIPELINE_ID
      job: publish-source
  script:
    - scripts/ds/ci-job.sh replica $ORG
  after_script:
    - 'tmux capture-pane -t claude -p -S -80 2>/dev/null | grep -v "^\$" | tail -40 || true'
  artifacts:
    when: always
    expire_in: 7 days
    paths:
      - .ds-verify/
      - .ds-task/
YAML
done

if [ "$COUNT" -eq 0 ]; then
  cat <<'YAML'

distribute-none:
  stage: distribute
  image:
    name: $DS_IMAGE
    entrypoint: [""]
  script:
    - echo "DS_COPY_ORGS is empty, so there is no organization to copy the design system to"
YAML
fi
