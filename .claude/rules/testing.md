---
id: testing
description: Rules for unit and integration test files
paths: ["**/*.test.ts", "**/*.test.tsx"]
---

# Testing

A test must fail when behaviour breaks and stay quiet when code only moves around. Unit tests cover logic, state changes and behaviour you can see in the rendered output, in a simulated DOM. If a case belongs to another test layer, write it there; do not imitate it here.

**Scope**

- A test MUST check behaviour you can observe: a return value, rendered output, or a call to a callback the component received. NEVER check internal state, hook internals, render counts or private utils.
  *Why:* internals change while behaviour stays the same, so tests tied to them fail on refactors and miss real bugs.
- Pure logic (formatters, validators, utilities), how props map to output, and state changes MUST be tested here, not through the UI: a direct call checks one case in milliseconds.
- NEVER assert anything that depends on layout, the cascade or geometry here (`getBoundingClientRect`, `offsetHeight`, computed styles, container breakpoints, `:hover`, where a floating element sits). A case that needs any of these belongs in an interaction test.
  *Why:* this environment has a DOM but does no layout and applies no stylesheets, so these values never change and the assertion proves nothing.

**Files and suites**

- `[lint]` A test file MUST sit next to the code it tests and be named `[Subject].test.ts(x)`.
- A file MUST have exactly one top-level suite, named after the unit it tests, with its tests in a flat list under it.
- You MAY add a nested suite for one reason only: some tests need setup that the others must not get (a fake clock, a provider wrapper, a mock server), and the nested suite keeps that setup away from them. NEVER add one to group tests by topic.
  *Why:* a topic group splits the case between the heading and the test name, and moves the data that explains a test away from it.
- `[lint]` A test name MUST describe the observable result in the present tense. NEVER start it with "should".
- A test name MUST state the condition as well as the result (`'reports the field as invalid when the name is empty'`), so it makes sense without its headings.
- Names MUST NOT mention internals: no method names, hooks, props, state fields, CSS classes or libraries.
  *Why:* a name that still fits after the internals are rewritten describes the contract.

**Independence**

- Each test MUST make sense on its own: the data that explains the assertion goes inside the test, not in a setup hook far away.
  *Why:* if the expected value comes from 200 lines away, nobody can review it, and nobody can safely move or delete the test.
- A setup hook MAY prepare infrastructure (mock servers, the clock, the subject itself), but NEVER data for one test.
- Tests NEVER share variables that change.
  *Why:* shared variables make tests depend on their order, and they become flaky when tests run in parallel or alone.

**Test data**

- Test data MUST be built from one base object, overriding only the field the case is about (`{ ...address, name: undefined }`).
  *Why:* the difference between cases then describes each case exactly.
- Fields that do not matter MUST be hidden in a factory.

**Assertions**

- One test MUST cover one case.
  *Why:* a focused failure names the broken behaviour; a combined one only names the file.
- Expected values MUST be literals. NEVER build them with concatenation, arithmetic, loops or conditions.
  *Why:* a computed expected value repeats the bug it should catch. In tests, being explicit is better than removing duplication.
- An assertion MUST name only the fields the case is about (`expect.objectContaining({ ... })`, or one assertion per field). NEVER write out a whole object to check one field.
- NEVER assert a class name. Assert what the user sees instead, or leave the look to a visual snapshot.
  *Why:* a class name is internal styling, so the assertion passes on a broken component and fails on a rename.
- You MAY assert a state attribute the component exposes (`data-open`).
  *Why:* it is a documented part of the contract, not an internal name.
- A snapshot MAY replace an assertion only for a serialized data structure. NEVER snapshot a DOM tree instead of writing assertions.
- A snapshot MUST be written into the test file, where a reviewer sees it in the diff (`toMatchInlineSnapshot`).
  *Why:* reviewers approve a snapshot they cannot read without really checking it, so it stops being a specification.

**Finding elements**

- An element MUST be found with the first query in this list that reaches it:
  *Why:* this order finds the element the way a person does, so the test checks what a user relies on, not the code behind it.
  - by role with an accessible name (`getByRole('button', { name: /save/i })`)
  - by label (`getByLabelText`)
  - by text (`getByText`)
  - by test id (`getByTestId`)
  - **STOP**: none of them reaches it? The component has an accessibility gap; report it instead of reaching into the DOM.
- `[lint]` An interaction MUST send the full sequence of events a real one sends, including focus and pointer events (`userEvent`). NEVER dispatch one synthetic event (`fireEvent`).

**Hooks**

- A hook MUST be tested through the component that uses it. A hook MAY be rendered alone (`renderHook`) only if the package exports it.
  *Why:* an internal hook may change freely, so testing it alone checks a contract nobody depends on.

**Time**

- A test MUST NOT wait for real time. It MUST fake the clock and restore it afterwards (`vi.useFakeTimers()` / `vi.useRealTimers()`).
- A test MUST move time forward explicitly (`vi.advanceTimersByTime(ms)`, `vi.runAllTimers()`), by the smallest step the case needs.
  *Why:* an explicit step shows which delay the behaviour depends on; running all timers hides which one mattered.

**Mocking**

- Render a component with real props and real children. NEVER mock the unit under test or another component of the project. Mock only what the component does not own: browser APIs, the clock, a third-party widget that needs a real rendering engine.
  *Why:* a mocked component checks the JSX we wrote, not the behaviour it produces.
- A callback prop MUST be a spy (`vi.fn()`). Assert its calls only where the result is not visible in the rendered output.

**Tooling: Vitest + Testing Library**

This group applies only to tests that Vitest runs with Testing Library.

- A call through `result.current` that updates state MUST be wrapped in `act()`.
  *Why:* the library wraps rendering and interactions itself, but it does not see a call made directly on a hook's result.
- With fake timers on, `userEvent` MUST be created as `userEvent.setup({ advanceTimers: vi.advanceTimersByTime })`.
  *Why:* `userEvent` waits on real timers between events, so otherwise the interaction never ends and the test times out.
- `[lint]` A variable that a `vi.mock` factory uses MUST be created with `vi.hoisted()`.
  *Why:* `vi.mock` runs before the imports, so a plain top-level variable does not exist yet when the factory runs.
