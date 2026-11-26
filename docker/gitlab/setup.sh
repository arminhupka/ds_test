#!/usr/bin/env bash
# Sets up the local GitLab of compose.yml for trying the pipeline: starts it, creates the project, the runner and the
# CI/CD variables of the local GitLab. Only what a local GitLab needs: no registry (a local image is used) and a job container that
# cannot reach localhost (so the API address is given). Your own settings (tokens, links, DS_COPY_ORGS, DS_TITLE) are never touched:
# add them yourself in Settings > CI/CD > Variables, see scripts/ds/README.md.
setvar() {
  api -X POST "$URL/api/v4/projects/root%2Fdesign-sync/variables" -d "key=$1" --data-urlencode "value=$2" >/dev/null 2>&1 \
  || api -X PUT "$URL/api/v4/projects/root%2Fdesign-sync/variables/$1" --data-urlencode "value=$2" >/dev/null
}
setvar DS_IMAGE "ds-sync-claude:latest"
setvar DS_SKIP_IMAGE_BUILD "1"                                 # no registry here: the local image is used
setvar DS_API_URL "http://gitlab:8929/api/v4"                  # the API as a job container reaches it (CI_API_V4_URL says localhost)
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

# the setup pushes HEAD to main with --force (it may rewind it): allow that on this local project only
api -X PATCH "$URL/api/v4/projects/root%2Fdesign-sync/protected_branches/main?allow_force_push=true" >/dev/null 2>&1 || true

# push the current HEAD as main: this starts the pipeline
git -C "$REPO" -c "http.extraHeader=Authorization: Basic $(printf 'root:%s' "$TOKEN" | base64 | tr -d '\n')" push -q "$URL/$PROJECT.git" HEAD:refs/heads/main --force
echo "pushed. Pipelines: $URL/$PROJECT/-/pipelines   (user root, password in docker/gitlab/.env)"
