---
id: storybook
description: Rules for stories, interaction tests and visual snapshots
paths: ["**/*.stories.ts", "**/*.stories.tsx"]
---

# Storybook

A story does three jobs. It documents the component, an interaction test (`play`) runs on it, and a visual snapshot takes a picture of it. If a story is unclear as documentation, it is also a weak test.

**Files**

- Every component that the package exports MUST have one stories file, `[Component].stories.ts(x)`, next to it, added in the same change as the component. A family of similar components (icons) MUST instead share one page. A component that is not exported NEVER has a stories file, except a pattern of the project's patterns folder (see the next bullet). A provider that renders no element of its own (a context) has none either; its JSDoc documents its props.
  *Why:* a consumer reads the story before importing, so it shows only what a consumer can import.
- A composite MUST have one stories file. It is declared for the root and lists every subcomponent in the story metadata (`subcomponents`). A subcomponent NEVER has its own stories file.
  *Why:* Storybook builds each subcomponent's props table from that list, and a subcomponent has no import path of its own to show in the sidebar.
- Variants MUST stay in that file. You MAY add a second file only for usage scenarios (the component together with others, a filled-in form), never for more variants.
- When a second file exists, every stories file of that component MUST move into a `stories/` folder next to the component, with its fixtures and utils. The first file keeps the name `[Component].stories.ts(x)`. Each other file is named `[Component].[Aspect].stories.ts(x)`.
- The sidebar entry (`title`) MUST be the component name only, with no group in front (`Subject`, not `Inputs/Subject`). A scenario file adds its aspect (`Subject/WithinForm`).
  *Why:* the sidebar then shows the same name the consumer imports.
- A pattern of the project's patterns folder MUST have one stories file, `[Pattern].stories.tsx`, that declares the pattern's component itself and exports no component. Its title MUST be `Patterns/[Pattern]`, the only title with a group.
  *Why:* a reader copies the pattern's code from that file, and the `Patterns/` group tells it apart from a component.
- Fixtures MUST be in `[Component].mocks.ts` and interaction utils in `[Component].play.ts`.

**Documentation**

- The first story MUST show the component's default state.
- Stories MUST show every state the component can reach from this list: default, empty, disabled, error, loading, and content that overflows or wraps. Skip a state the component cannot reach; never fake it.
  *Why:* these states break most often in review, and each story gives a snapshot that would not exist otherwise.
- A state that the component only passes on, unchanged, to another component of the project MUST NOT get a story of its own; the stories of that other component show it. A state the component draws or handles itself MUST get one.
  *Why:* every story is a snapshot that CI runs, and the same picture taken twice adds no coverage.
- Stories of a component used by several product areas MUST use generic placeholder content (`Button`, `Label`, `Option 1`, `Lorem ipsum`, `John Doe`). NEVER use words from a product's domain, and NEVER copy text from a mockup, even if it looks neutral.
  *Why:* every module that uses the component copies the story, so a domain word suggests a name and a use the component does not have.
- The story for content that overflows or wraps MUST be named `LongContent` in every component.
  *Why:* one name lets a reader find the edge case in any component.
- A story name MUST say which state it shows (`Disabled`, `Loading`, `LoadingFailed`). NEVER name it after a visual detail (`Blue`) and NEVER number it (`Example1`).
- If the name alone does not explain the story, the story MUST have a one-sentence JSDoc description. Names MUST NOT grow longer to explain it.

```tsx
/** Submitting with an empty required field keeps focus on the first invalid input. */
const SubmitWithEmptyRequiredField: Story = { /* ... */ };
```

- Prop documentation MUST come from the component's types and JSDoc (`autodocs`). NEVER repeat a prop description in the stories file.
- You MAY configure a prop's entry only to limit its control or to hide it from the table (`argTypes`).

**Args and variants**

- The type checker MUST check args against the props of the component the file is declared for. For a composite, that is the root (`satisfies Meta<typeof [Component]>`, `StoryObj<typeof meta>`).
- If the compiler cannot name the inferred type of `meta`, you MUST annotate it instead (`const meta: Meta<typeof [Component]>`, `StoryObj<typeof [Component]>`) and add a comment that says why.
- The default args MUST hold the smallest full set of props that renders the default state, and nothing more. A story MUST set only the props its own state needs.
  *Why:* the default is then a working example, and each story reads as a change from it.
- A prop that most stories override MUST NOT be in the default args.
  *Why:* otherwise the reader must leave the story to see what it renders.
- Stories MUST show every value of a variant prop (`variant`, `size`, `intent`) in one story, with the project's shared variant table, which prints the props of each row next to what they render. Each row MUST hold only props of the component the file is declared for; NEVER invent a row key the component does not have (`hasPart`, `isThing`), and show something a consumer composes (a part passed as a child) in its own story. NEVER give each value its own story, and NEVER write the labels by hand. A state (disabled, error) gets its own story.
  *Why:* one snapshot compares all combinations at once, and one story per value means many more stories and baselines. A row is printed as the props that render it, so a made-up key shows an API that does not exist.
- A callback prop MUST be a spy that records its calls (`fn()` from `storybook/test`), never an empty arrow function.
- Fixture data that more than one story uses MUST come from one place, never a literal repeated in each story. Use a module-level constant for data that does not change (`const OPTIONS = [...]`) and a factory for data a story changes.

**Decorators**

- Anything the component needs to render at all (context providers, theme) MUST be a decorator that every story shares, so all stories render under the same conditions.
- Anything that frames one story (a width limit to show container-query behaviour, a sibling to show alignment) MUST be a decorator on that story, never markup inside `render`.
  *Why:* a decorator stays outside the component's own tree, so the story shows the component as a consumer mounts it.
- `render` MUST be used only to compose the component with its own subcomponents or children.

**Interaction (`play`)**

- You MUST use `play` to reach a state that args cannot set (an open menu, a filled-in form) and to check the result of an interaction. NEVER use it to check logic again that a unit test already covers.
- An element MUST be found with the first query in this list that reaches it:
  *Why:* this order finds the element the way a person does, so the story tests what a user relies on, not the code behind it.
  - by role with an accessible name (`getByRole('button', { name: /save/i })`)
  - by label (`getByLabelText`)
  - by text (`getByText`)
  - by test id (`getByTestId`)
  - **STOP**: none of them reaches it? The component has an accessibility gap; report it instead of reaching into the DOM.
- `play` MUST end with the component in the state the story is meant to show.
  *Why:* the screenshot is taken after `play` finishes, so its last step is what the picture shows.

**Visual snapshots**

- A story with a snapshot MUST look the same on every run: no random values, no current date or time, no running animation or pending request, no content whose length changes.
  *Why:* a changing value makes the snapshot differ on every run even when the component did not change, so the snapshot no longer catches regressions.
- A story whose look is not worth guarding MUST turn snapshots off (`tags: ['!snapshot']`).
  *Why:* a person must approve every baseline on each intended change, so each one must be worth that work.
