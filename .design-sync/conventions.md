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
