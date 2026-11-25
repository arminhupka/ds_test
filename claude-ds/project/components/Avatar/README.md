Avatar from @mini-ui/base. Use via `window.MiniUiBase.Avatar` (from `components/bundle.js`). Wrap the tree in `<TranslationsContext>` (full provider chain in README.md — components read theme/i18n from that context).

Variants (see `preview.html`): Default, Statuses, WithImage.

## Props

```ts
interface AvatarProps {
  ref?: React.Ref;
  id?: string;
  /** The person's full name: announced to screen readers and turned into initials. */
  name: string;
  /** The person's picture; the initials show while it is missing, loading or failed. */
  src?: string;
  /** The person's status, shown as a dot on the circle. `none` shows no dot. */
  status?: "none" | "active" | "inactive";
}
```

## Examples

### Default

```jsx
() => <Avatar name="John Doe" />;

// An active person gets a dot in the positive color, an inactive one a dot in the border color.
```

### Statuses

```jsx
() => (
  <div style={TABLE}>
    <Row name='status="none"'><Avatar name="John Doe" status="none" /></Row>
    <Row name='status="active"'><Avatar name="John Doe" status="active" /></Row>
    <Row name='status="inactive"'><Avatar name="John Doe" status="inactive" /></Row>
  </div>
);

// A picture that loads replaces the initials.
```

### WithImage

```jsx
() => <Avatar name="John Doe" src={IMAGE_SRC} />
```
