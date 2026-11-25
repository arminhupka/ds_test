Checkbox from @mini-ui/base. Use via `window.MiniUiBase.Checkbox` (from `components/bundle.js`). Wrap the tree in `<TranslationsContext>` (full provider chain in README.md — components read theme/i18n from that context).

Sub-components: `Checkbox.Root`, `Checkbox.Indicator`. See the DS docs for composition — e.g. items like `Checkbox.Item` go inside `<Checkbox>`; containers like `Checkbox.Group` wrap multiple `<Checkbox>`s.

Variants (see `preview.html`): Default, Checked, Automation, Indeterminate, Disabled, Sizes.

## Examples

### Default

```jsx
() => (
  <Checkbox.Root aria-label="Label">
    <Checkbox.Indicator />
  </Checkbox.Root>
)
```

### Checked

```jsx
() => (
  <Checkbox.Root aria-label="Label" defaultChecked>
    <Checkbox.Indicator />
  </Checkbox.Root>
);

// A parent option whose children are only partly selected.
```

### Indeterminate

```jsx
() => (
  <Checkbox.Root aria-label="Label" indeterminate>
    <Checkbox.Indicator />
  </Checkbox.Root>
);

// Disabled, unchecked and checked.
```

### Disabled

```jsx
() => (
  <div style={TABLE}>
    <Row name="defaultChecked={false}">
      <Checkbox.Root aria-label="Label" disabled defaultChecked={false}>
        <Checkbox.Indicator />
      </Checkbox.Root>
    </Row>
    <Row name="defaultChecked={true}">
      <Checkbox.Root aria-label="Label" disabled defaultChecked>
        <Checkbox.Indicator />
      </Checkbox.Root>
    </Row>
  </div>
);

// Both sizes, checked.
```

### Sizes

```jsx
() => (
  <div style={TABLE}>
    <Row name='size="sm"'>
      <Checkbox.Root aria-label="Label" defaultChecked size="sm">
        <Checkbox.Indicator />
      </Checkbox.Root>
    </Row>
    <Row name='size="md"'>
      <Checkbox.Root aria-label="Label" defaultChecked size="md">
        <Checkbox.Indicator />
      </Checkbox.Root>
    </Row>
  </div>
);

// Checked in the automation color, for anything the Agent or auto-fill does or suggests.
```

### Automation

```jsx
() => (
  <Checkbox.Root aria-label="Label" defaultChecked accent="automation">
    <Checkbox.Indicator />
  </Checkbox.Root>
)
```

## Related

`Checkbox.Root`, `Checkbox.Indicator`
