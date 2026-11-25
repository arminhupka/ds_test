---
id: meta-rules
description: Rules for writing the rule files themselves
paths: [".claude/rules/*.md"]
---

# How to write rule files

A rule file tells the agent how to write one kind of file. The agent reads it before it edits a matching file, and its work is checked against it. It is not documentation.

## Where it goes

- Pick the place by taking the first case that applies:
  - something a consumer of the packages needs (install, usage) → `README.md`
  - something a maintainer needs only now and then (setup, releases, CI) → `CONTRIBUTING.md`
  - a fact, not a demand (what the repository is, its stack, structure, commands) → `AGENTS.md`
  - a rule for every change, true in any project → `general.md`
  - a rule for one kind of file, true in any project → that kind's rule file
  - a rule about this repository's structure (packages, entry points, imports) → Rules in `AGENTS.md`
  - a rule for one part of this repository that needs its names → a `project-` rule file
  - **STOP**: none fits? Ask.
  *Why:* every rule file without the `project-` prefix must still be true when copied to another project.
- A rule file without the `project-` prefix NEVER names this project's folders, files or naming patterns. It writes "the project's token set" or "the project's shared folder" instead; `AGENTS.md` says what that is.
- A rule file NEVER restates `AGENTS.md` or `general.md`, and NEVER points at another rule file, because that file may not be loaded. A rule that several kinds of file need is written out in each of their files.

## Frontmatter

- `id` is the file name without `.md`.
- `description` reads `Rules for <the files it covers>`, with no full stop.
- `paths` is a YAML list of globs. A file for every change has no `paths`.
- NEVER use a negated glob: agents ignore it.

## Writing a rule

- Use exact names and numbers. Avoid vague words (*clean, sensible, where possible*).
- A rule MUST be checkable from the diff: kept or broken, with no judgement call.
- One rule per bullet, never numbered, built on `MUST`, `NEVER`, `PREFER` or `MAY`. A `MUST` and the `NEVER` for the same case stay in one bullet.
- Say what to do, not only what to avoid.
- If two rules can conflict, say which one wins. A file NEVER ranks itself against another file; `general.md` does that.
- Leave out what a tool already enforces, and any command or version.
- Examples use placeholders (`Subject`, `--token`, `--token-a`), never real names, and follow the file's own rules.
- No TODOs and no open questions: if the team has not decided, there is no rule.
- NEVER hard-wrap a line.
- Keep a file under 250 lines.
- NEVER end a file with a checklist that repeats its rules.

Add these only where they help:

- **Context**: up to three sentences under the title, when one idea explains several rules.
- **`Why:`**: one line under a rule the agent might otherwise work around.
- **`❌ / ✅` example**: when the wording could be misread.
- **Decision ladder**: "decided by taking the first case that applies", one nested bullet per case, ending with `**STOP**:` if the cases do not cover everything.
- **`[lint]` prefix**: a rule a linter could enforce but does not yet. Delete it once the linter does.
- **`Tooling: <tool>` group**, at the end: rules that exist only because of how one library works. It opens with one line saying what it covers (`Only components built on Base UI follow this group.`). The rest of the file names tools only in parentheses, so it stays true if the library changes.
  - A file about one tool only (`storybook.md`) names that tool directly and has no Tooling group.
  - Web platform names (CSS, the DOM, ARIA) are always used directly.
- **`Temporary: until <event>` group**, last: rules that end when something exists. Delete the group then.

## Maintenance

- Add a rule only after a real problem: a bad review or a bad agent output.
- Delete a rule once a linter enforces it or the code it is about is gone.
- A rule that matters only once a skill has run (how to show its output, what to do with its result) MUST live in that skill. NEVER move any other rule into a skill: a skill loads only when called.
