Button from @mini-ui/base. Use via `window.MiniUiBase.Button` (from `components/bundle.js`). Wrap the tree in `<TranslationsContext>` (full provider chain in README.md — components read theme/i18n from that context).

Variants (see `preview.html`): Default, Variants, Disabled, Loading, Small, FullWidth.

## Props

```ts
interface ButtonProps {
  ref?: React.Ref;
  id?: string;
  children?: React.ReactNode;
  /** Whether the button should be focusable when disabled. */
  focusableWhenDisabled?: boolean;
  /** Whether the component renders a native `<button>` element when replacing it via the `render` prop. Set to `false` if the */
  nativeButton?: boolean;
  /** Visual weight: filled, outlined, or a text-only link style. */
  variant?: "primary" | "secondary" | "tertiary";
  /** What the action means: a regular, a destructive, a neutral one, or one AI carries out. */
  intent?: "positive" | "neutral" | "automation" | "danger";
  /** Control height and type size. */
  size?: "sm" | "md";
  /** `full` stretches the button across its container, as for the one action closing a form or panel. */
  width?: "auto" | "full";
  /** Shows a spinner over the label and ignores clicks, keeping the button's size. */
  loading?: boolean;
}
```

## Examples

### Default

```jsx
() => <Button>Button</Button>
```

### Variants

```jsx
() => (
  <div style={TABLE}>
    <Row name='variant="primary" intent="positive"'><Button variant="primary" intent="positive">Button</Button></Row>
    <Row name='variant="secondary" intent="positive"'><Button variant="secondary" intent="positive">Button</Button></Row>
    <Row name='variant="primary" intent="danger"'><Button variant="primary" intent="danger">Button</Button></Row>
    <Row name='variant="secondary" intent="danger"'><Button variant="secondary" intent="danger">Button</Button></Row>
    <Row name='variant="primary" intent="neutral"'><Button variant="primary" intent="neutral">Button</Button></Row>
    <Row name='variant="secondary" intent="neutral"'><Button variant="secondary" intent="neutral">Button</Button></Row>
    <Row name='variant="primary" intent="automation"'><Button variant="primary" intent="automation">Button</Button></Row>
    <Row name='variant="secondary" intent="automation"'><Button variant="secondary" intent="automation">Button</Button></Row>
    <Row name='variant="tertiary"'><Button variant="tertiary">Button</Button></Row>
  </div>
)
```

### Disabled

```jsx
() => (
  <div style={TABLE}>
    <Row name='variant="primary" intent="positive"'><Button variant="primary" intent="positive" disabled>Button</Button></Row>
    <Row name='variant="secondary" intent="positive"'><Button variant="secondary" intent="positive" disabled>Button</Button></Row>
    <Row name='variant="primary" intent="danger"'><Button variant="primary" intent="danger" disabled>Button</Button></Row>
    <Row name='variant="secondary" intent="danger"'><Button variant="secondary" intent="danger" disabled>Button</Button></Row>
    <Row name='variant="primary" intent="neutral"'><Button variant="primary" intent="neutral" disabled>Button</Button></Row>
    <Row name='variant="secondary" intent="neutral"'><Button variant="secondary" intent="neutral" disabled>Button</Button></Row>
    <Row name='variant="primary" intent="automation"'><Button variant="primary" intent="automation" disabled>Button</Button></Row>
    <Row name='variant="secondary" intent="automation"'><Button variant="secondary" intent="automation" disabled>Button</Button></Row>
    <Row name='variant="tertiary"'><Button variant="tertiary" disabled>Button</Button></Row>
  </div>
)
```

### Loading

```jsx
() => (
  <div style={TABLE}>
    <Row name='variant="primary" intent="positive"'><Button variant="primary" intent="positive" loading>Button</Button></Row>
    <Row name='variant="secondary" intent="positive"'><Button variant="secondary" intent="positive" loading>Button</Button></Row>
    <Row name='variant="primary" intent="danger"'><Button variant="primary" intent="danger" loading>Button</Button></Row>
    <Row name='variant="secondary" intent="danger"'><Button variant="secondary" intent="danger" loading>Button</Button></Row>
    <Row name='variant="primary" intent="neutral"'><Button variant="primary" intent="neutral" loading>Button</Button></Row>
    <Row name='variant="secondary" intent="neutral"'><Button variant="secondary" intent="neutral" loading>Button</Button></Row>
    <Row name='variant="primary" intent="automation"'><Button variant="primary" intent="automation" loading>Button</Button></Row>
    <Row name='variant="secondary" intent="automation"'><Button variant="secondary" intent="automation" loading>Button</Button></Row>
    <Row name='variant="tertiary"'><Button variant="tertiary" loading>Button</Button></Row>
  </div>
)
```

### Small

```jsx
() => <Button size="sm">Button</Button>
```

### FullWidth

```jsx
() => <Button width="full">Button</Button>
```
