#!/usr/bin/env bash
# Sets up the local GitLab of compose.yml for trying the pipeline: starts it, creates the project, the runner and the
# CI/CD variables, then pushes the current HEAD of this repo as `main`, which starts a pipeline.
# The pipeline runs in dry-run mode (DS_DRY_RUN=1): it needs no Claude login and publishes nothing.
# Nothing here touches another GitLab. Run it again any time; it skips what exists.
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")"
REPO="$(cd ../.. && pwd)"
URL="http://localhost:8929"
PROJECT="root/design-sync"

[ -f .env ] || { printf 'GITLAB_ROOT_PASSWORD=%s\n' "$(python3 -c 'import secrets; print(secrets.token_hex(12))')" > .env; chmod 600 .env; }
set -a; . ./.env; set +a

json() { python3 -c "import sys,json; d=json.load(sys.stdin); print($1)"; }

docker compose up -d
echo "waiting for GitLab (the first start takes 5 to 10 minutes)..."
# The health endpoints answer 404 from the host (they are limited to allowed addresses), so wait for the sign-in page.
until [ "$(curl -s -o /dev/null -w '%{http_code}' "$URL/users/sign_in")" = 200 ]; do sleep 5; done
echo "GitLab is up"

# An API token for the local GitLab only: the password grant is off here, so one is made with the rails runner (once, kept in .env).
TOKEN="${GITLAB_API_TOKEN:-}"
if [ -z "$TOKEN" ]; then
  TOKEN="glpat-$(python3 -c 'import secrets; print(secrets.token_hex(13))')"
  docker compose exec -T gitlab gitlab-rails runner "u = User.find_by_username('root'); t = u.personal_access_tokens.create!(scopes: [:api], name: 'ds-sync-setup', expires_at: 30.days.from_now); t.set_token('$TOKEN'); t.save!" >/dev/null
  printf 'GITLAB_API_TOKEN=%s\n' "$TOKEN" >> .env
  echo "API token created"
fi
api() { curl -fsS -H "PRIVATE-TOKEN: $TOKEN" "$@"; }

# the project
if ! api "$URL/api/v4/projects/root%2Fdesign-sync" >/dev/null 2>&1; then
  api -X POST "$URL/api/v4/projects" -d name=design-sync -d path=design-sync -d visibility=private -d default_branch=main >/dev/null
  echo "project created"
fi

# CI/CD variables: the image is the local one, nothing is published, and the source always reports a change
setvar() {
  api -X POST "$URL/api/v4/projects/root%2Fdesign-sync/variables" -d "key=$1" --data-urlencode "value=$2" >/dev/null 2>&1 \
  || api -X PUT "$URL/api/v4/projects/root%2Fdesign-sync/variables/$1" --data-urlencode "value=$2" >/dev/null
}
setvar DS_IMAGE "ds-sync-claude:latest"
setvar DS_SKIP_IMAGE_BUILD "1"                          # no registry here: the local image is used
setvar DS_DRY_RUN "1"
setvar DS_FORCE "1"
setvar DS_PUSH_URL "http://gitlab:8929/$PROJECT.git"          # reachable from a job container
setvar ARTIFACT_URL_ORG2 "https://claude.ai/artifact/PLACEHOLDER-ORG2"
setvar ARTIFACT_URL_ORG3 "https://claude.ai/artifact/PLACEHOLDER-ORG3"
echo "variables set"

# the runner (once)
if ! docker compose exec -T runner grep -q '\[\[runners\]\]' /etc/gitlab-runner/config.toml 2>/dev/null; then
  RTOKEN="$(api -X POST "$URL/api/v4/user/runners" -d runner_type=instance_type -d description=local-design-sync -d run_untagged=true | json 'd["token"]')"
  docker compose exec -T runner gitlab-runner register --non-interactive \
    --url "http://gitlab:8929" --clone-url "http://gitlab:8929" --token "$RTOKEN" \
    --executor docker --docker-image ds-sync-claude:latest --docker-pull-policy if-not-present \
    --docker-network-mode ds-gitlab_default \
    --docker-volumes "$REPO/.ds-sync:/host-ds-sync:ro" >/dev/null
  echo "runner registered"
fi

# push the current HEAD as main: this starts the pipeline
git -C "$REPO" -c "http.extraHeader=Authorization: Basic $(printf 'root:%s' "$TOKEN" | base64 | tr -d '\n')" push -q "$URL/$PROJECT.git" HEAD:refs/heads/main --force
echo "pushed. Pipelines: $URL/$PROJECT/-/pipelines   (user root, password in docker/gitlab/.env)"
