Input from @mini-ui/base. Use via `window.MiniUiBase.Input` (from `components/bundle.js`). Wrap the tree in `<TranslationsContext>` (full provider chain in README.md — components read theme/i18n from that context).

Variants (see `preview.html`): Default, Filled, LongContent.

## Props

```ts
interface InputProps {
  /** The default value of the input. Use when uncontrolled. */
  defaultValue?: string | number | readonly string[];
  ref?: React.Ref;
  /** The value of the input. Use when controlled. */
  value?: string | number | readonly string[];
  id?: string;
  children?: React.ReactNode;
}
```

## Examples

### Default

```jsx
() => <Input aria-label="Label" placeholder="Placeholder" />
```

### Filled

```jsx
() => <Input aria-label="Label" placeholder="Placeholder" defaultValue="Lorem ipsum" />
```

### LongContent

```jsx
() => (
  // A text longer than the field scrolls inside it. The dashed box only shows where the parent ends.
  <div style={{ resize: 'horizontal', overflow: 'auto', border: '1px dashed var(--ds_color-border-strong)', boxSizing: 'border-box', inlineSize: '160px' }}>
    <Input aria-label="Label" placeholder="Placeholder" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" />
  </div>
)
```
