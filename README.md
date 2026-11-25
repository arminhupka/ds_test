# UI Components (reduced copy: Button, Input)

A cut-down copy of a React component library repository, made to test the design sync. It has the same layout, tooling and rules as the original, but one package and two components.

| Package | What it holds |
|---|---|
| `@mini-ui/base` | The design system: `Button`, `Input`, `TranslationsContext`, and the design tokens they share. |

## Usage

```tsx
import { Button } from '@mini-ui/base/button';
import { Input } from '@mini-ui/base/input';

<Input aria-label="Name" placeholder="Name" />
<Button>Save</Button>
```

Every component has an entry point of its own, named after it in kebab-case (`@mini-ui/base/button`). The tokens are `@mini-ui/base/tokens.css`; set `html { font-size: 12px }`, as lengths are rem against a 12px root.

## Translations

Buttons that show only an icon have built-in labels for screen readers. Wrap the application once in `TranslationsContext` and pass it the translated texts from the backend.

## Styling

Components do not accept `className` or `style`. You change how a component looks with its props (variants, sizes, intents). Themes come from the design system's CSS custom properties (`data-theme="dark"` on an ancestor). Components have no outer margin: the layout around them sets the space between them.

## Types

Every exported component has a matching props type (`Button` → `ButtonProps`); individual prop value types are not exported. Take one from the props type, for example `ButtonProps['intent']`.

## Examples

Storybook shows each component: `npm start` (port 6006), or read the stories in `packages/base/src/components/*/`.

## Contributing

See `CONTRIBUTING.md` and `AGENTS.md`.
