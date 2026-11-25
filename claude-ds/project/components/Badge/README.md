Badge from @mini-ui/base. Use via `window.MiniUiBase.Badge` (from `components/bundle.js`). Wrap the tree in `<TranslationsContext>` (full provider chain in README.md — components read theme/i18n from that context).

Variants (see `preview.html`): Default, Intents.

## Props

```ts
interface BadgeProps {
  id?: string;
  children?: React.ReactNode;
  intent?: "neutral" | "positive";
}
```

## Examples

### Default

```jsx
() => <Badge>3</Badge>
```

### Intents

```jsx
() => (
  <div style={TABLE}>
    <Row name='intent="positive"'><Badge intent="positive">3</Badge></Row>
    <Row name='intent="neutral"'><Badge intent="neutral">3</Badge></Row>
  </div>
)
```
