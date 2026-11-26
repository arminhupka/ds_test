# Automatic design sync

> **The GitLab pipeline (below) is the way to run this.** It keeps no copy of the design system in git: `claude-ds/` is made by the
> pipeline and passed between jobs as a job artifact. The Docker watchers described first work on a `claude-ds/` that is committed to
> the repository (`DS_PUSH_TOKEN` mode, committed with `git add -f`), so they are an alternative, not part of the pipeline.

After a push to `main`, every organization updates its design system by itself. One organization builds it, the others copy it 1:1, so the results cannot drift.

```
push to main
  ├─ ORG1 (source)   sources changed  → build (no AI) → publish → pull back into claude-ds/ → commit
  └─ ORG2, ORG3      claude-ds/ changed → publish claude-ds/project 1:1 → read back → compare sha256
```

Each machine runs one watcher, signed in to its own organization (`/login`):

```bash
scripts/ds/watch.sh source  org1      # on the ORG1 machine
scripts/ds/watch.sh replica org2      # on the ORG2 machine
scripts/ds/watch.sh replica org3      # on the ORG3 machine
```

The watcher is a plain loop: `git fetch` every minute, nothing else while nothing changes. When something it depends on changed it runs `source.sh` or `replica.sh`. The SHA of the last finished change is stored in `~/.ds-sync/<org>.sha`, only after the job succeeded; a failed job is retried every 30 minutes and written to the log.

## Setup

- **Every machine:** Node, git, Claude Code signed in with the account of that organization (a claude.ai login, not an API key), a clone of the repo with push rights only on the ORG1 machine.
- **ORG1:** `.ds-sync/` must exist (it is installed by running `/design-sync` once). The artifact it publishes to is the one in `.design-sync/artifact.json`.
- **ORG2/ORG3:** create the artifact once by hand, then put its link in `~/.ds-sync/<org>.url`.
- **Keep it running:** `tmux`, or a launchd agent that runs the command above with `KeepAlive`. A closed terminal stops the watcher.
- **Notifications:** none for now, everything goes to the log (`notify` in `lib.sh` is the one place to add a channel).

## What is verified, what is not

- **Verified:** the build is deterministic. Rebuilding gives byte-identical files to what `/design-sync` published, except the two metadata files (`design-system.json`, `_ds_sync.json`). The watcher's rules (when it runs and when it stays quiet, retry, no state on failure, one watcher per org) are tested.
- **Not verified yet:** the headless publish and read-back through the interactive session in tmux (`source.sh`, `replica.sh`). Run `scripts/ds/replica.sh <org>` or `source.sh <org>` once by hand on each machine before you rely on the watcher.
- **Left out on purpose:** the visual grading `/design-sync` does with an agent. The build only compares hashes, so a change that looks wrong but builds cleanly is not caught.

## Run it in Docker (one machine, one container per organization)

```bash
cd docker
docker compose up -d --build            # org1 (source) and org2 (replica)
docker compose exec -it org1 claude     # sign in once with the ORG1 account (/login)
docker compose exec -it org2 claude     # sign in once with the ORG2 account
```

Each container waits until it is signed in, then starts its watcher by itself. The login is kept in a volume per organization (`home-org1`, `home-org2`), so it survives restarts. `docker compose logs -f org2` shows what the watcher does.

- **ORG2 artifact:** put its link in `ARTIFACT_URL_ORG2` before `up` (or write it to `~/.ds-sync/org2.url` in the container).
- **Repo:** `REPO_URL` defaults to `/seed`, this working copy mounted read-only, so you can try it without a push. For the real thing set `REPO_URL=https://github.com/arminhupka/ds_test.git`; ORG1 also needs a way to push (a deploy key with write access).
- **A third organization:** copy the `org2` block in `docker/compose.yml` as `org3`.

## Why an interactive session

`claude -p` has no Artifact tool, only an interactive `claude` has. So each container keeps one interactive Claude in `tmux` (started with `--allowedTools Artifact`). A job writes its task to `.ds-task/`, tells the session to do it, and then waits until the files read back from the artifact (`.ds-verify/<org>/`) match what should be there. If they do not match in `DS_TASK_TIMEOUT` seconds (default 900), or the session stops to ask for a permission, the job fails, shows what the session displays, and is retried 30 minutes later.

The session asks once whether it may trust the folder. A person must answer it, once per container:

```bash
docker compose exec -it org2 tmux attach -t claude    # choose "Yes, I trust this folder", detach with Ctrl+b d
```

## GitLab pipeline (no machine running all the time)

`.gitlab-ci.yml` runs the same jobs as a pipeline after a merge to the default branch: `publish-source` builds, publishes (ORG1), verifies and passes `claude-ds/` on; `distribute-org2` then publishes it 1:1 and verifies. A third organization is one more `distribute-*` block, shown commented out at the end of `.gitlab-ci.yml`. A runner starts a container per job, so nothing has to run between merges and nothing polls. The jobs run one after another (one resource group).

Each job logs in with a token instead of a login in a volume, and starts with a **preflight**: it starts the interactive session and asks it for one Artifact call. A login without the Artifact tool, a session waiting for a person, or a bad token stops the job at once with the reason, not after the timeout.

### One-time setup
1. **Runner:** Docker executor, with access to claude.ai and the npm registry. Run the `prepare-image` job once by hand (Pipelines > Run pipeline, then start it) to build the image into the project's registry.
2. **Tokens:** for each organization, signed in as its technical account, run `claude setup-token` (it opens a browser) and store the result as a masked, protected CI/CD variable: `CLAUDE_TOKEN_ORG1`, `CLAUDE_TOKEN_ORG2` (and `CLAUDE_TOKEN_ORG3` when there is a third). Limit them to the protected default branch. A token is a login to that organization: never print it, and rotate it when it expires.
3. **First-run and folder-trust settings (`CLAUDE_JSON_FILE`, a file variable):** a fresh container asks for the folder trust, which nobody answers in a pipeline. Take the keys `hasCompletedOnboarding` and `projects` from a `~/.claude.json` that works (for example `docker compose exec org2 cat ~/.claude.json`), keep only the entry of the project folder and change its path to the pipeline's `CI_PROJECT_DIR` (for example `/builds/<group>/<project>`). Leave out everything about accounts. This is your decision to trust that folder; the job never makes it for you.
4. **Links:** `ARTIFACT_URL_ORG2`, the design system artifact of the copy (and `ARTIFACT_URL_ORG3` for a third). ORG1's is in `.design-sync/artifact.json`.
5. **Optional, `DS_PUSH_TOKEN`:** a project access token with write access. Only for the watcher mode or when you want the design system committed (it is committed with `git add -f`, as the folder is ignored). The pipeline does not need it.

### Notes
- **Baseline:** nothing is committed, so "did the design system change?" is answered against `claude-ds/` of the **last successful pipeline** (the artifact of `publish-source` on the default branch, downloaded with the job token; the image needs `unzip`). With no such artifact (a first run, an expired one) there is no baseline and the design system counts as changed, so the first pipeline publishes and copies. Keep the artifacts of the latest pipeline (the project's "Keep artifacts from most recent successful jobs" setting, on by default), or they expire after 7 days and the next pipeline publishes once more. `DS_API_URL` changes the API address and `DS_BASELINE_JOB` the job name.
- The `distribute-*` jobs do nothing when `publish-source` reports that the design system did not change. A copy that failed is not retried by a later pipeline: start that job again. Run a pipeline by hand with `DS_FORCE=1` to publish even without a change.
- The jobs keep `.ds-verify/` (what was read back from the artifact) and `.ds-task/` as job artifacts for a week, and print what the session shows when a job fails.
- The watchers in `docker/` and this pipeline do the same work; use one of them for an organization, not both.

### Not verified yet
- That the token from `claude setup-token` gives the session the Artifact tool. The preflight tells you in the first job.
- The folder-trust file, the image build with kaniko, the runner's access to claude.ai, and the push with `DS_PUSH_TOKEN`. None of these has run on GitLab yet. The jobs were tried in a throwaway container, with the login of a volume instead of a token.

### Trying the pipeline on a local GitLab
`docker/gitlab/` runs GitLab CE and a runner in Docker, so the pipeline can be tried without touching a production GitLab.

```bash
cd docker/gitlab
./setup.sh      # starts GitLab (the first start takes 5 to 10 minutes), makes the project, the runner and the variables, pushes HEAD as main
```

- **Web UI:** http://localhost:8929, user `root`, the password is `GITLAB_ROOT_PASSWORD` in `docker/gitlab/.env` (not in git). The pipelines are at `/root/design-sync/-/pipelines`.
- **Dry run:** the project variables `DS_DRY_RUN=1` and `DS_FORCE=1` make the jobs build for real but skip the login and the publish, so no token is needed. The build job reports a change, the copies download `claude-ds/` from it and check its sums. Remove `DS_DRY_RUN` (and add the tokens) to publish for real.
- **Image:** the runner uses the local image `ds-sync-claude` (build it with `docker compose build` in `docker/`), so `prepare-image` is skipped (`DS_SKIP_IMAGE_BUILD=1`). The source job takes `.ds-sync` from the host folder the runner mounts at `/host-ds-sync`.
- Run `./setup.sh` again after a change: it pushes the current HEAD as `main` and starts a new pipeline.
- **What this does not check:** a real login by token, the production runner, network and registry, and the push with `DS_PUSH_TOKEN`.
