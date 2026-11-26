# Design sync pipeline

After a merge to the default branch, one organization builds the design system and publishes it, and every other organization copies the result 1:1. Because the copies are not generated again, the design systems cannot drift apart. No machine runs all the time: a runner starts a container for each job.

```
merge to main
  check     check-variables      every project variable the run needs is set; names the missing ones and where to add them
  prepare   prepare-image        builds the image of the jobs (only when docker/Dockerfile changes)
  publish   publish-source       builds the design system (no AI), publishes it to the source organization, reads it back to verify
                                 and passes claude-ds/ on as a job artifact
  plan      plan-distribution    writes one distribute job for each organization in DS_COPY_ORGS
  distribute  distribute-<org>   (a child pipeline) publishes claude-ds/ 1:1 to that organization and verifies the sums by reading back
```

The design system is **not kept in git**. `claude-ds/` is made by `publish-source` and handed to the copy jobs as a job artifact. The next run takes the artifact of the last successful run as its baseline, to tell whether anything changed.

## Where to put the tokens

The Claude tokens, and every other setting, are **project variables** of the GitLab project: **Settings > CI/CD > Variables > Add variable** (`<project url>/-/settings/ci_cd`). Nothing is written in the repository.

1. For each organization, signed in as its technical account, run `claude setup-token` (it opens a browser) and copy the token.
2. Add it as a variable named **`CLAUDE_TOKEN_<ORG>`**: the organization's name in capital letters. For the organizations `org1` (the source) and `org2` (a copy): `CLAUDE_TOKEN_ORG1` and `CLAUDE_TOKEN_ORG2`. Set **Masked** and **Protected**, and leave "Expand variable reference" off.
3. A job takes the token of the organization it works for. You never name a token in a job: the name of the organization is enough.

The first job, `check-variables`, tells you what is missing: it lists each variable that is not set, says what it is for, and prints the address above. It never prints a value. Add `DS_COPY_ORGS` and `ARTIFACT_URL_<ORG>` the same way (see the tables below).

## Why a Claude session runs in each job

Publishing needs the Artifact tool, which only an interactive `claude` has (`claude -p` does not). So each job starts one interactive Claude in `tmux` (with `--allowedTools Artifact`), writes its task to `.ds-task/`, tells the session to do it, and waits until the files read back from the design system (`.ds-verify/<org>/`) equal what should be there. The job fails, and prints what the session shows, when they do not match within `DS_TASK_TIMEOUT` seconds or the session stops to ask for a permission.

Each job starts with a **preflight**: one tiny Artifact call. A login without the Artifact tool, a session waiting for a person, or a bad token stops the job at once with the reason, not after the timeout.

## Project variables

Nothing about an organization is written in `.gitlab-ci.yml`. A setting of an organization is a project variable named after it, in capital letters (`org2` is `ORG2`). The names are yours: lowercase letters, digits, `-` and `_`.

**Set these**

| Variable | What it is |
|---|---|
| `CLAUDE_TOKEN_<ORG>` | the login of that organization (output of `claude setup-token`), for the source and for each copy. Masked, protected. |
| `ARTIFACT_URL_<ORG>` | the link of that organization's design system. Needed for each copy. The source's may stay in `.design-sync/artifact.json`. |
| `DS_COPY_ORGS` | the organizations that copy it, separated by commas: `org2,org3` |

**Optional**

| Variable | What it does | Default |
|---|---|---|
| `DS_TITLE` | the name of the design system | the one in `.design-sync/artifact.json` |
| `DS_SOURCE_ORG` | the organization that builds and publishes | `org1` |
| `DS_TRUST_FOLDER` | `0` stops the job from trusting the project folder by itself (see below) | trusts, on a protected branch |
| `CLAUDE_JSON_FILE` | (type File) your own first-run and folder-trust settings, used instead of the generated ones | none |
| `DS_FORCE` | publish even without a change; set it for one manual run | off |
| `DS_IMAGE` | the image of the jobs | `$CI_REGISTRY_IMAGE/ds-sync:latest` |
| `DS_TASK_TIMEOUT` | seconds to publish and verify | 900 |
| `DS_PREFLIGHT_TIMEOUT` | seconds for the preflight | 180 |
| `DS_BASELINE_JOB` | the job whose artifact is the baseline | `publish-source` |
| `DS_TOOL_SRC` | where the source job takes `.ds-sync` from | `/host-ds-sync` |

**Flags** (`DS_DRY_RUN`, `DS_FORCE`) are on for any value except empty, `0`, `false`, `no` and `off`, so setting `DS_DRY_RUN` to `0` turns it off. Deleting the variable does the same.

**For trying it without a login:** `DS_DRY_RUN=1` builds for real but publishes nothing, and needs no tokens. `DS_SKIP_IMAGE_BUILD=1` skips `prepare-image` when an image already exists, and `DS_API_URL` sets the GitLab API address as a job container sees it. These three are for a local GitLab (below); remove them in production.

**Set by the pipeline, not by you:** `DS_CHANGED`, `DS_ENV_FILE`, `PARENT_PIPELINE_ID`.

A new copy is a new name in `DS_COPY_ORGS` plus its `CLAUDE_TOKEN_<ORG>` and `ARTIFACT_URL_<ORG>`. `plan-distribution` writes the job, so `.gitlab-ci.yml` does not change.

## One-time setup

1. **Runner:** Docker executor, with access to claude.ai and the npm registry. Run the `prepare-image` job once by hand (Pipelines > Run pipeline, then start it) to build the image into the project's registry.
2. **Design systems:** each organization needs its design system to exist, because the pipeline updates it and does not create it. The source's is made by running `/design-sync` once (it writes `.design-sync/artifact.json`). A copy's is made once by hand in an interactive `claude` of that organization, and its link goes to `ARTIFACT_URL_<ORG>`.
3. **Tokens:** for each organization, signed in as its technical account, run `claude setup-token` (it opens a browser) and store the result as the masked, protected variable `CLAUDE_TOKEN_<ORG>`. Limit it to the protected default branch. A token is a login to that organization: never print it, and rotate it when it expires.
4. **Folder trust (nothing to set up):** a fresh Claude Code asks for the first-run settings and whether it may trust the project folder, and nobody answers in a pipeline. So each job writes a minimal `~/.claude.json` that marks the first run done and trusts `CI_PROJECT_DIR`, **only on a protected branch** (the default branch is protected), where the code that runs is code you reviewed and merged. On any other branch the job stops at the question, and `check-variables` says so. Two ways to change this: set `DS_TRUST_FOLDER=0` to turn it off, or provide your own settings as `CLAUDE_JSON_FILE` (a File variable), which is then used as it is. This is a security decision: keep the pipeline limited to protected branches, and do not run it for merge requests from forks.
5. **The sync tool:** the source job needs `.ds-sync/` (installed by `/design-sync`, not kept in git). Give the folder to the runner or the image at `DS_TOOL_SRC`; the job installs its dependencies for the platform of the image.

## Notes

- **Baseline:** "did the design system change?" is answered against `claude-ds/` of the last successful pipeline (the artifact of `publish-source` on the default branch, downloaded with the job token; the image needs `unzip`). With no such artifact (a first run, an expired one) there is no baseline and the design system counts as changed, so that pipeline publishes and copies. Keep the artifacts of the latest pipeline (the project's "Keep artifacts from most recent successful jobs" setting, on by default), or they expire after 7 days and the next pipeline publishes once more.
- **No change:** when `publish-source` reports no change, the copy jobs do nothing. A copy that failed is not retried by a later pipeline: start that job again. Run a pipeline by hand with `DS_FORCE=1` to publish anyway.
- **Order:** the jobs publish one at a time (one resource group), so two pipelines never publish together.
- **Kept after a run:** `.ds-verify/` (what was read back) and `.ds-task/` are job artifacts for a week, and a failed job prints what the session shows.
- **Notifications:** none; everything goes to the job log. `notify` in `lib.sh` is the one place to add a channel.

## Files

| File | What it does |
|---|---|
| `ci-check.sh` | the first job: checks the project variables and names the missing ones |
| `ci-job.sh` | one job: sets up the login, installs `.ds-sync`, fetches the baseline, runs the preflight, then `source.sh` or `replica.sh` |
| `source.sh` | builds, compares with the baseline, publishes, verifies by reading back, leaves `claude-ds/` |
| `replica.sh` | checks the sums of `claude-ds/`, publishes it 1:1, verifies by reading back |
| `build.sh` | the build with no AI: same input, same bytes (needs `.ds-sync/`) |
| `ci-plan.sh` | writes the copy jobs from `DS_COPY_ORGS` |
| `lib.sh` | shared helpers, including the tmux session |

## Trying the pipeline on a local GitLab

`docker/gitlab/` runs GitLab CE and a runner in Docker, so the pipeline can be tried without touching a production GitLab.

```bash
cd docker/gitlab
./setup.sh      # starts GitLab (the first start takes 5 to 10 minutes), makes the project, the runner and the variables, pushes HEAD as main
```

- **Web UI:** http://localhost:8929, user `root`, the password is `GITLAB_ROOT_PASSWORD` in `docker/gitlab/.env` (not in git). The pipelines are at `/root/design-sync/-/pipelines`.
- **Dry run:** the project variables `DS_DRY_RUN=1` and the others from `setup.sh` make the jobs build for real but skip the login and the publish, so no token is needed. The source job leaves `claude-ds/` as it would publish it, and the copy jobs download it and check its sums. Remove `DS_DRY_RUN` and add the tokens to publish for real.
- **Image:** the runner uses the local image `ds-sync-claude` (build it with `docker build -t ds-sync-claude docker`), so `prepare-image` is skipped. The source job takes `.ds-sync` from the host folder the runner mounts at `/host-ds-sync`.
- Run `./setup.sh` again after a change: it pushes the current HEAD as `main` and starts a new pipeline.
- **What this does not check:** a real login by token, the production runner, network and registry.

## Not verified yet

- That the token from `claude setup-token` gives the session the Artifact tool. The preflight tells you in the first job.
- The generated folder-trust settings (checked in a fresh container: the session starts without the question, but not yet with a real login), the image build with kaniko on a real registry, and the runner's access to claude.ai. None of these has run on a production GitLab.
- Long use: a session that stops on an unexpected question, a login that expires, an update of Claude Code that changes the Artifact tool. The job has a time limit and prints the session, but nobody is told.
- The visual grading `/design-sync` does with an agent is left out on purpose: the build compares hashes, so a change that looks wrong but builds cleanly is not caught.
