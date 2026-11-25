## Using this system

**Setup.** Load `components/bundle.css` (it brings the tokens, the Lexend font and the component styles) and `components/bundle.js`, then use the components from `window.MiniUiBase`. No provider is needed: `Button` and `Input` render fully styled on their own. A `<TranslationsContext translations={{}}>` wrapper, which the usage notes mention, is harmless but not required for these two. The stylesheet sets the page root to `font-size: 12px` and the body font to Lexend (Tahoma, then sans-serif as fallback). Every size is in `rem` against that 12px root, so do not change the root size or set your own body font.

**Theme.** Colors come from tokens with two themes. Light is the default. For dark, put `data-theme="dark"` on `<html>` or on any wrapper: the nearest ancestor with `data-theme` decides, so one area of a page can be dark without a prop. The theme does not paint the page: give the page or area `background: var(--ds_color-surface-default)` and `color: var(--ds_color-text-primary)`.

**Styling idiom: CSS custom properties, no utility classes.** Components take props, not class names. For your own layout, use the tokens as `var(--ds_...)`. Never write a raw hex color, pixel radius or shadow where a token exists. Tokens that exist:
- Text: `--ds_color-text-primary`, `-text-secondary`, `-text-disabled`, `-text-inverse`, `-text-link`, `-text-danger`, `-text-positive`, `-text-warning`, `-text-on-action`.
- Surfaces: `--ds_color-surface-default`, `-surface-subtle`, `-surface-selected`, `-surface-disabled`, `-surface-inverse`.
- Borders and focus: `--ds_color-border-default`, `-border-strong`, `-border-selected`, `-border-disabled`, `--ds_color-focus-ring`.
- Actions: `--ds_color-action-positive`, `-action-danger`, `-action-neutral`, `-action-automation`, `-action-warning`, `-action-selection`.
- Space: `--ds_space-0-5`, `-space-1`, `-space-1-5`, `-space-2`, `-space-3`, `-space-4`.
- Radius: `--ds_radius-sm`, `-radius-md`, `-radius-lg`, `-radius-full`. Shadow: `--ds_shadow-sm`, `-shadow-md`, `-shadow-lg`.
- Type: `--ds_font-size-sm`, `-font-size-md`, `-font-size-xl`; `--ds_font-weight-regular`, `-font-weight-semibold`, `-font-weight-bold`; `--ds_line-height-sm`, `-line-height-md`, `-line-height-xl`.

**Where the truth lives.** Read `tokens.css` and `tokens.json` for every token and its value in both themes. Read `components/bundle.css` for the component styles. Read `components/<Name>/README.md` for each component's examples and `components/index.d.ts` for its props.

**Components.**
- `Button`: `variant` is `primary | secondary | tertiary`. `intent` is `positive | danger | neutral | automation` (a tertiary button has no intent). `size` is `sm | md`. `width` is `auto | full`. `loading` shows a spinner and ignores clicks.
- `Input`: a single text field. It fills the width of its container; limit its width with a wrapper. It takes `value` or `defaultValue`, `placeholder` and `aria-label` (label it, as it has no visible label of its own).

**One build.**

```jsx
const { Button, Input } = window.MiniUiBase;

function SignInForm() {
  return (
    <form style={{ display: 'grid', gap: 'var(--ds_space-3)', inlineSize: 320, padding: 'var(--ds_space-4)', borderRadius: 'var(--ds_radius-lg)', border: '1px solid var(--ds_color-border-default)' }}>
      <Input aria-label="Email" placeholder="Email" />
      <Button variant="primary" intent="positive" width="full">Sign in</Button>
      <Button variant="tertiary">Forgot password</Button>
    </form>
  );
}
```

# MiniUiBase (@mini-ui/base@0.0.0)

This design system is the published @mini-ui/base React library, bundled as a single
browser global. All 5 components are the real upstream code.

## Where things are

- `components/bundle.js` — every component, as one script that sets `window.MiniUiBase`.
- `components/bundle.css` — the one stylesheet: the library's tokens and component styles, joined.
- `components/<Name>/README.md` (usage, example JSX), `components/<Name>/preview.html` (the live preview), `components/index.d.ts` (every `<Name>Props`).
- `tokens.json` — the tokens this system's pages show, read from the library's custom properties; `tokens.css` is the same as CSS.

For a specific component, read `components/<Name>/README.md`.

## Loading

What to load, and in what order, is under "Consuming this system" at the end of this file.

Components are then available at `window.MiniUiBase.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { Avatar } = window.MiniUiBase;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<Avatar />);
```

Wrap the tree in the provider — most components read theme/i18n from context:

```jsx
<TranslationsContext translations={{}}>{children}</TranslationsContext>
```

## Tokens

100 CSS custom properties from @mini-ui/base. Names are
preserved verbatim from upstream. They are declared inside `components/bundle.css`.

- **color** (31): `--ds_color-text-primary`, `--ds_color-text-secondary`, `--ds_color-text-inverse`, …
- **spacing** (7): `--ds_space-0-5`, `--ds_space-1`, `--ds_space-1-5`, …
- **typography** (10): `--ds_font-family-base`, `--ds_font-size-sm`, `--ds_font-size-md`, …
- **radius** (5): `--ds_radius-sm`, `--ds_radius-md`, `--ds_radius-lg`, …
- **shadow** (3): `--ds_shadow-sm`, `--ds_shadow-md`, `--ds_shadow-lg`
- **other** (44): `--ds_palette-red`, `--ds_palette-amber`, `--ds_palette-green`, …

## Components

### base
- `Avatar` — A gray circle showing a person's picture or, in its place, their initials. The initials always come from name,
- `Badge` — A small pill with a count or a short status, such as the number of selected options.
- `Button`
- `Checkbox` — A control that turns one option on or off, with an indeterminate state for partial selections. (compound: `Checkbox.Root`, `Checkbox.Indicator`)
- `Input` — A single-line text control. Inside an InputGroup it drops its own frame, as the group draws it.

---

## Consuming this system (generated — do not edit)

Every path named in this file is under `project/` in this design system (the two jsDelivr addresses below are web addresses, not paths): read `project/components/bundle.js`, not `components/bundle.js`.

`components/bundle.js` defines `window.MiniUiBase` (5 components). `components/bundle.css` is its stylesheet, with the library's own custom properties in it. `tokens.css` holds the tokens the pages of this system show. The bundle reads `window.React` and `window.ReactDOM`. This system includes no copy of React: the artifact's own page loads React 18.3.1 from jsDelivr, and any other page needs React 18 too, as below.
Build any UI by mounting these components. Never hand-build a control the system provides.

- **Any page:** load, in this order, `tokens.css`, `components/bundle.css`, `https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js`, `https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js` and `components/bundle.js`. A script here is a classic script, not a module. A page that already has React 18 as `window.React` and `window.ReactDOM` skips the two web addresses.
- **Design canvas:** copy `tokens.css`, `components/bundle.css`, `components/bundle.js` and `components/index.d.ts` in full, each to the same path under the canvas's `project/ds/<folder>/`. Link the stylesheets in that order, before the script. The artboard supplies React. The editor's Properties panel reads each component's props from `components/index.d.ts`. Mount a component with `<x-import component-from-global-scope="MiniUiBase.<Comp>">`.
- **Slides deck, or any surface that cannot run the bundle:** take `tokens.json`; a deck mounts no components.

**Where to read more:** a component's props: `<Comp>Props` in `components/index.d.ts`; how to use a component, with examples: `components/<Comp>/README.md`; token values: `tokens.json`.
