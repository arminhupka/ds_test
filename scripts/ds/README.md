# Automatic design sync

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
- **Not verified yet:** the headless publish and read-back through `claude -p` with the Artifact tool (`source.sh`, `replica.sh`). Run `scripts/ds/replica.sh <org>` or `source.sh <org>` once by hand on each machine before you rely on the watcher.
- **Left out on purpose:** the visual grading `/design-sync` does with an agent. The build only compares hashes, so a change that looks wrong but builds cleanly is not caught.
