# Contributing

For the developers who maintain this repository: setup and workflow.

The other docs:

- `README.md`: for teams that use the packages.
- `AGENTS.md`: for AI agents. An agent reads it on every task, so it holds only what most changes need.

## Setup

```bash
npm install
npm start
```

Storybook opens on port 6006.

Visual snapshot tests (`npm run test:storybook:local`) run in Docker, in the same Linux image as CI. Docker must be running, and you must be able to reach `mcr.microsoft.com`.

## Workflow

- Branch name: `<type>/[<ticket-id>-]<description>`, lowercase kebab-case.
- Use conventional commits (`feat: add the tooltip`). Mark a breaking change with a `BREAKING CHANGE:` footer that says what consumers must change.
- If you change how a component looks on purpose, run `npm run test:storybook:update` and commit the new snapshots.
- Before you push, run `npm run lint`, `npm run types` and `npm test`.
