---
id: styling
description: Rules for stylesheets
paths: ["**/*.module.css"]
---

# Styling

A component must look right wherever it is placed, without knowing what is around it. It must also work with right-to-left text, user font scaling and translated strings, with no fixes for one language. Put layout, state-based looks and animation in CSS whenever a CSS feature can do it in the browsers the project supports.

**Files**

- A composite MUST have one stylesheet, shared by its subcomponents.
  *Why:* parts style each other (a popup's variant recolors its close button), and one file keeps all these links in view.
- A composite's stylesheet MAY be split into one stylesheet per subcomponent only when it has more than 250 lines and no rule in it reaches another part's class or custom property. Each part's stylesheet then sits next to that part.
- Styling that several components share (a control's frame, a list's options) MUST live in one stylesheet that each of them composes (`composes: root from '…'`). NEVER copy its declarations.
- A class that composes another MUST NOT declare again a property that the composed class sets.
  *Why:* the composed stylesheet may load before or after the other one, so you cannot know which of the two wins.

**Naming**

- A class for a slot MUST name the slot's role (`.root`, `.label`, `.statusIndicator`). NEVER name it after how it looks or where it sits.

```css
/* ❌ */ .greenDot, .leftBoxInner, .mt16 {}
/* ✅ */ .statusIndicator, .mediaPreview, .footerActions {}
```

**Selectors**

- A selector MUST target a class of its own stylesheet. It MAY narrow it by that element's state (`&:hover`, `&[data-open]`), by a class of the same stylesheet around it (`.small .label`), or by a state attribute that an ancestor sets (`[data-warning] &`). NEVER narrow it by a tag or by a class of another stylesheet.
  *Why:* a state attribute is a documented contract. A tag or a foreign class ties the styling to markup that can change at any time.
- A stylesheet MUST style only DOM that its own component renders. Leaving the scope (`:global`) is allowed only for the DOM of a third-party widget, and each use MUST name that library in a comment.

**Variants and state**

- A class for one value of a variant MUST be named after that value (`.primary`, `.negative`). A stylesheet MUST NEVER define a variant that the component's variant table does not list.
  *Why:* the class only carries the look. Which combinations exist is decided, with types, in one file.
- Visual states MUST come from `data-*` and `aria-*` attributes (`&[data-checked]`, `&[aria-disabled="true"]`). NEVER switch class names to show a state. One exception: a third-party widget that marks a state only with a class of its own. The class that uses it MUST name that library in a comment.
  *Why:* when the look depends on the same attribute that assistive technology reads, what users see and what is announced always match.

**Values and tokens**

- `[lint]` Colors, typography, spacing, radii, shadows and durations MUST come from design tokens (`var(--token)`). The only literal values allowed for these are unitless `0`, `1px` hairlines, `100%`, and a dimension that only one component uses (see below).
- A token used in a stylesheet MUST exist in the project's token set. NEVER invent a token name. If no token fits the value, stop and ask.
- A component stylesheet MUST NEVER redefine a token.
  *Why:* the design system decides a token's value. A local change makes this component differ from every other component that uses the token.
- `var()` MUST name, with no fallback value, one of these: a token, a custom property declared in the same stylesheet, or a property that the primitive sets on its own element (`--anchor-width`, `--available-height`).
  *Why:* with a fallback, a missing or misspelled name still renders something that looks right, so nobody notices the mistake.
- A custom property that a stylesheet declares for itself MUST follow the project's naming scheme for a component's own properties.
  *Why:* the scheme keeps it apart from the tokens and shows where it is declared.
- `rem`/`em` lengths MAY be written as literal values in `@container` conditions.
  *Why:* a container breakpoint is the component's own layout limit, not a design-system decision, so no token exists for it.
- `color-mix()` MAY be used to make hover, active and see-through states, but every input MUST be a token or `transparent`. NEVER mix in a literal color.

```css
/* ❌ */ background-color: color-mix(in srgb, var(--token-a), #000 20%);
/* ✅ */ background-color: color-mix(in srgb, var(--token-a), var(--token-b) 20%);
/* ✅ */ background-color: color-mix(in srgb, var(--token-a) 20%, transparent);
```

**Layout and box model**

- The component root MUST NOT set `margin`.
  *Why:* a component takes up exactly its own box. The space between components belongs to the layout that places them, not to the components.
- Space between elements MUST use `gap`, never margins on children.
- Size MUST come from the content, through `padding` and `line-height`. NEVER give an element a fixed `inline-size`/`block-size`.
  *Why:* a fixed size guesses the size of content the component does not control, and the guess fails with translations and user font scaling.
- An element that fills its parent MUST say so with `inline-size: 100%`. An element with a fixed ratio (an icon, an avatar) MAY have a fixed size.
- A dimension that only one component uses (a fixed-ratio size, a maximum length) MUST be declared once, as a custom property on the class that sets it. It MUST NEVER be a design-system token.
  *Why:* a token is a decision shared by many components. A value that one component owns changes with that component, in its stylesheet.
- A component stylesheet MUST NOT set `z-index`. The primitive that owns layering handles it. The one exception: a sticky element MAY set `z-index: 1` to stay above the content that scrolls under it in its own scroll box.
  *Why:* positioned controls in the scrolling content paint over a sticky element that comes before them, and no primitive covers this case.
- A fixed ratio MUST use `aspect-ratio` and one dimension. NEVER fake a ratio with percentage padding or by setting both dimensions.

```css
/* ❌ */ .thumbnail { position: relative; padding-top: 56.25%; }
/* ✅ */ .thumbnail { aspect-ratio: 16 / 9; inline-size: 100%; }
```

- `[lint]` Sides MUST follow the writing direction (`start`/`end`, `inline`/`block`), never fixed sides (`left`/`right`, `top`/`bottom`).

```css
/* ❌ */ padding-left: var(--token); text-align: left; width: 100%;
/* ✅ */ padding-inline-start: var(--token); text-align: start; inline-size: 100%;
```

- Tokens MUST carry the theme. NEVER write a `prefers-color-scheme` block in a component stylesheet.
  *Why:* a token changes its value with the theme, and every component follows. A block in one component covers only the properties someone remembered to list.
- A component stylesheet MUST use only semantic tokens, NEVER palette tokens.
  *Why:* a palette value is the same in every theme, so the component would not follow the theme.
- A component's own responsive behaviour MUST use `@container`. Use `@media` only for user preferences and device features (`prefers-reduced-motion`, `forced-colors`, `hover`).
  *Why:* the container decides how much space a component has, not the viewport. Viewport breakpoints give layouts that are right only where they were written.
- A stylesheet that uses `@container` MUST make the component's own root the container (`container-type: inline-size` with a `container-name`), and every condition MUST name it. NEVER query a container that the component does not declare.
  *Why:* a condition without a name uses whatever ancestor is a container, so the component's layout changes with where it is placed.
- A condition MUST NOT style the root that is the container. Only its descendants respond.
  *Why:* an element cannot query its own container, so such a declaration never applies, and nothing reports it.

**Scrolling**

- A scrollable container MUST set `overscroll-behavior: contain`, so the page behind it does not scroll too.
- Scrollbar looks MUST use `scrollbar-width` and `scrollbar-color`. NEVER use `::-webkit-scrollbar` pseudo-elements.

**Interaction and motion**

- Hover styles that show selection or choice (list rows, menu items, options) MUST be inside `@media (hover: hover)`.
  *Why:* on a device without a pointer, the hover state stays after a tap, so the element looks selected.

```css
/* ✅ */
@media (hover: hover) {
  .row:hover { background-color: var(--token); }
}
```

- `outline: none` / `outline: 0` MUST come with a high-contrast `&:focus-visible` style in the same file. NEVER style plain `:focus`.
  *Why:* keyboard users see focus only through this indicator, and the browser keeps `:focus-visible` for them.
- `[lint]` Transitions and `@keyframes` MUST animate only `transform` (or `translate`/`scale`/`rotate`), `opacity`, `filter`, `clip-path` and paint-only properties (`color`, `background-color`, `border-color`, `box-shadow`). NEVER animate properties that change layout (`width`, `height`, `inline-size`, `block-size`, `margin`, `padding`, `inset`, `top`/`left`).
- `[lint]` `transition` MUST list each property. `transition: all` is NEVER allowed.
- A file that declares a transition or animation MUST have a `@media (prefers-reduced-motion: reduce)` block that turns it off or makes it shorter.
