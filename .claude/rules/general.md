---
id: general
description: Rules for every change, whatever the file
---

# General

**Linter and type errors**

- A linter, formatter or type-checker error MUST be fixed in the code. NEVER silence it with a comment, and NEVER change the config to allow it.
  *Why:* the config is a team decision. If a rule looks wrong, raise it.
- A rule marked `[lint]` MUST be followed as if a linter enforced it.

**Several rule files at once**

- Every rule file that matches the changed file applies (a story is also a `.tsx` file).
- If two rule files disagree, the one with the narrower `paths` wins on that point. The other one still applies to everything else.

**Language**

- Everything written in the repository (code, comments, docs, rule files, stories) MUST be in plain, simple English: short sentences and common words, even when the conversation was in another language.

**Where files live**

- A file used by one component (a util, hook, context, stylesheet, mock, type) MUST live in that component's folder.
- A file used by several components MUST live in the project's shared folder for its kind. NEVER leave it among the components.
  *Why:* a component folder can then be read, moved or deleted as one unit.
- NEVER copy a component, stylesheet or util for a second use. Share it instead.
  *Why:* copies drift apart and nothing reports it.
- A function that supports other code MUST be called a util in file, folder and identifier names (`utils/`). NEVER call it a helper.

**When a rule cannot be met**

- When a rule cannot be met, you MUST stop, describe the problem and ask. NEVER work around the rule, and NEVER leave a workaround or a disabled check behind.
