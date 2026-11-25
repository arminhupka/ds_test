---
id: project-base
description: Rules for the design system's base components
paths: ["packages/base/src/**/*.tsx"]
---

# Base components

A base component adds styles to a headless primitive. It takes behaviour and accessibility from the primitive whenever one exists, and owns only the look. The rest of the platform builds its interface from these components.

**Scope of a component**

- What to build MUST be decided by taking the first case that applies:
  - a primitive covers the pattern and the design needs only its styling → re-export it with our styles
  - the design needs behaviour the primitive does not have → build on top of the primitive
  - no primitive covers the pattern → build the component from scratch, and report which primitives you checked
    *Why:* the report lets a reviewer notice a primitive that was missed.
- Focus trapping, focus restoring, roving focus, dismissal, layering, positioning, and enter and exit animation MUST NOT be written by hand for a pattern that the primitive library already covers.
  *Why:* these break in ways that reviewers do not notice and unit tests do not reach, and the primitive is tested with assistive technology.
- A composite MUST expose only the parts a consumer places or configures. Parts that a consumer would always write the same way (a portal, a positioner, a popup) MUST be merged into one part that renders them all (`Content`).
  *Why:* otherwise every consumer repeats the same nesting, and a part nobody configures is API that must stay backward-compatible for no reason.
- A part MUST NOT remove primitive props, except the ones this package never exposes. Removing any other option is a decision to raise with the team, not to make while styling.
- A part MAY drop a primitive prop only in these cases, and the part's JSDoc MUST name each one:
  - the part draws its own content (an icon, the initials) → it does not accept `children`
  - the component sets the value itself for accessibility (an image's `alt` inside a named avatar) → it does not accept that prop
  - the component owns the behaviour the prop controls (a date picker closes its popup when a date is picked) → it does not accept `open`, `initialFocus` and similar props

**Naming**

- A component built from other components, which lets the user enter or pick a value, MUST be named by taking the first case that applies:
  *Why:* the suffix tells a consumer how the control works before they open it.
  - several controls in one frame make the value (an amount and its currency) → `[Subject]Field`
  - the value is a date or a time, or the user picks it in a view that is not a list (a calendar, a map) → `[Subject]Picker`
  - the user types the value as text and gets suggestions from a list (built on `Autocomplete`) → `[Subject]Autocomplete`
  - the user picks the value from a list, with or without search (built on `Select` or `Combobox`) → `[Subject]Select`
  - **STOP**: none applies? Ask before you name it.

**Props**

- A component MUST NEVER accept the primitive's prop for replacing the element (`render`), except on a `Trigger`. Remove it from the inherited props, together with `className` and `style` (`Omit<…, 'className' | 'style' | 'render'>`).
  *Why:* when a consumer's element is merged with the primitive's props, handlers and refs, one of them is lost and nothing reports it.
- A `Trigger` MUST accept `render`, so any element can open what it controls (a `Button`, an `IconButton`). When it gets `render`, the trigger MUST apply none of its own styling.
  *Why:* the element that opens a popup changes from screen to screen, but the popup does not. The element passed in brings its own styling and behaviour.
- An `intent` MUST take its values only from `neutral`, `automation`, `positive`, `warning` and `danger`, and only the ones the design shows for that component. The plain look is `neutral`, NEVER `default`.
  *Why:* each value maps to one color token, so the same word means the same color on every component.

**Composition**

- A re-exported part MUST keep the primitive's name (`List`, `Thumb`, `Indicator`). A part that this package adds MUST be named after its role, or else with a word from the primitive library (`Group`, `Control`, `Increment`).
  *Why:* both kinds of parts then use one vocabulary, and a consumer never needs to know which parts are ours.
- This package's styling MUST go on the element that the primitive already renders, through the way the primitive offers for this (`render`). NEVER wrap a primitive in an extra element to hold the styling.
  *Why:* an extra element moves the primitive away from the DOM position that its positioning and ARIA links expect.
- When a primitive shows a state as a `data-*` attribute, the component MUST read the state from that attribute. NEVER copy it into component state.
- A popup MUST render into the platform's shared popup container, never into `document.body` (`usePopupContainer`, passed as the portal's `container`).
- A field's state MUST be set in one place, and everything that shows it MUST read it from there: the status on the field, the requiredness on the control. NEVER copy it into a second prop, context or attribute.
  *Why:* a copy can differ from the source, and then a label shows a state that its control does not have.
- An icon inside a small control (one with `size="sm"`, such as a small button or a tag's remove button), or next to small text (such as a table header), MUST get `size="sm"` too. Everywhere else, an icon keeps its default size.
  *Why:* the default icon is 20px. A control of the default size has room for it, but a small control or a line of small text would grow taller.

**Stories**

- A form control's stories MUST render it alone, named by an `aria-label`. The one exception is `InField`, which shows it in a `Field` through a decorator.
- For a control that draws an input frame, the field states (warning, invalid, automation, autofilled, disabled) MUST be shown together with all other such controls in `Field.Controls` (`field/stories/`), never in the control's own stories file.
  *Why:* with one snapshot per state, you see at once whether all controls look the same in it.
- A story that shows long content (wrapping, truncation, overflow) MUST be framed with `parameters.frame`, NEVER with its own width decorator. It MUST set a width only when the default does not fit.
  *Why:* the shared frame shows where the parent ends and can be resized to check any width.

**Themes**

- An area or popup that is always dark MUST set the theme (`Theme`, or `data-theme` on the popup), NEVER pick colors for it by hand.
  *Why:* a hand-picked color ignores the theme the design team sets later, and nothing reports it.

**Tooling: Base UI**

This group applies only to components built on Base UI.

- State attributes MUST be written the way Base UI writes them: separate boolean attributes (`data-open` and `data-closed`, `data-checked` and `data-unchecked`), not one attribute with a value. NEVER write `data-state="open"`.
