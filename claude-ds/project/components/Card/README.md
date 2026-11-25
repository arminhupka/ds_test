Card from @mini-ui/base. Use via `window.MiniUiBase.Card` (from `components/bundle.js`). Wrap the tree in `<TranslationsContext>` (full provider chain in README.md — components read theme/i18n from that context).

Sub-components: `Card.Root`, `Card.Title`, `Card.Description`. See the DS docs for composition — e.g. items like `Card.Item` go inside `<Card>`; containers like `Card.Group` wrap multiple `<Card>`s.

Variants (see `preview.html`): Default, Variants, WithTitle.

## Examples

### Default

```jsx
() => <Card.Root>Lorem ipsum dolor sit amet</Card.Root>;

// Both variants and every tinted intent. A tinted card takes no variant.
```

### Variants

```jsx
() => (
  <div style={TABLE}>
    <Row name='variant="default"'><Card.Root variant="default"><Content /></Card.Root></Row>
    <Row name='variant="subtle"'><Card.Root variant="subtle"><Content /></Card.Root></Row>
    <Row name='intent="automation"'><Card.Root intent="automation"><Content /></Card.Root></Row>
    <Row name='intent="positive"'><Card.Root intent="positive"><Content /></Card.Root></Row>
    <Row name='intent="warning"'><Card.Root intent="warning"><Content /></Card.Root></Row>
    <Row name='intent="danger"'><Card.Root intent="danger"><Content /></Card.Root></Row>
  </div>
);

// A title and a description; children stack with an even gap.
```

### WithTitle

```jsx
() => (
  <Card.Root>
    <Card.Title>Lorem ipsum</Card.Title>
    <Card.Description>Dolor sit amet, consectetur adipiscing elit.</Card.Description>
  </Card.Root>
)
```

## Related

`Card.Root`, `Card.Title`, `Card.Description`
