---
id: react-components
description: Rules for React component files
paths: ["**/src/**/*.tsx"]
---

# React components

A component is used by applications its package never sees. So its props are the whole contract: a consumer cannot reach what is not a prop, and you cannot remove a prop without a breaking change. A component owns no data and does no I/O.

**Exports and imports**

- `[lint]` A component MUST be a named export.
- Inside a component's own folder, a module MUST be imported from the file that declares it (`./SubjectContext`). NEVER import it through the folder's re-export file (`.` or `./index`).
  *Why:* the re-export file is for code outside the folder. Importing it from inside creates an import cycle and loads every other module in the folder.
- Another exported component MUST be imported through its public entry point, NEVER from one of its other files.
  *Why:* the other files are internal and can change without notice. The rule protects the API, not the bundle size.

**Naming**

- A component that styles one primitive of the primitive library, or one HTML element, MUST keep the primitive's name (`Combobox`, `Autocomplete`, `Textarea`). NEVER rename it.
  *Why:* then the primitive's documentation describes the component under the same name.

**Props**

- A prop MUST exist only because the consumer decides its value. If the component can work out a value itself, it is NEVER a prop.
- NEVER accept `className` or `style`. Remove both from the inherited props (`Omit<…, 'className' | 'style'>`).
  *Why:* an outside class overrides the styles in a way the stylesheet cannot predict. Then the component looks different in every module that patches it.
- Related appearance choices MUST be one prop with a closed set of values (`variant?: 'primary' | 'secondary'`), never several booleans.
  *Why:* two booleans allow four combinations, and the design covers only some of them.
- A prop that picks the component's size MUST be named `size`, with values from the scale `sm`, `md`, `lg`.
- A prop that picks the component's look MUST be named after what it decides, by taking the first case that applies. NEVER give one prop two of these jobs, and NEVER use another name (`tone`, `color`, `kind`) for them.
  *Why:* one word per job lets a consumer guess the prop on any component, and keeps combinations the design does not cover out of one value set.
  - what the color means (good, bad, a warning, who acts) → `intent`
  - the color of a checked or selected state of a choice control → `accent`
  - the state of the value in validation (warning, invalid) → `status`
  - the visual weight or form (filled, outlined, subtle, inverse) → `variant`
  - **STOP**: none applies? Ask before you name it.
- A component, part, prop or variant value MUST exist only when a design or a consumer needs it. If the designs show a component in one size only, it MUST NOT take a `size` prop.
  *Why:* nobody can judge what nobody uses, and you cannot remove it later without a breaking change.
- An optional prop with a closed set of values MUST have a default value, so the component renders without it.
- The component's own prop MUST NOT have the name of an attribute the rendered element already has (`heading`, not `title`).
  *Why:* the props type extends the element's attributes. The two meanings clash, and the value still reaches the DOM.
- If the consumer can read or set the component's value, the component MUST support both modes: `value` with `onValueChange` when the consumer passes `value`, and `defaultValue` otherwise. NEVER support only one.
- A prop that holds text for screen readers only MUST be named `[thing]Label` (`searchLabel`). A prop that holds visible text MUST be named `[thing]Text` (`emptyText`). The component's own `label` keeps that name.
  *Why:* one suffix per job tells a consumer whether the text is shown, without reading the JSDoc.
- A text that does not depend on the consumer's case (`Search`, `Loading…`, `No results`) MUST come from the component's own translations, and its prop, if any, MUST be optional.
  *Why:* every consumer would pass the same words, and a required prop makes them translate it again.
- A callback prop MUST be named `on[Event]`.
- A callback MUST receive the value the consumer acts on. It receives the DOM event only when the event itself is the contract (`onClick`, `onKeyDown` forwarded to the rendered element).
- A custom prop MUST have a one-line JSDoc description.

**Variants and classes**

- The mapping from variant props to classes MUST be one declarative table next to the component (`cva`). NEVER build a class string with conditions in the component body.
  *Why:* the table is the only place that shows which combinations exist.
- A default value MUST be declared in exactly one place: in `defaultVariants` when a single table reads the prop, and in the component signature in all other cases.
  *Why:* two declarations disagree as soon as one changes, and nothing fails.
- A class that applies only to a combination of variant values MUST be declared as that combination (`compoundVariants`). NEVER add a variant value that stands for a combination.
- A component that renders several elements MUST declare one table per element, with only that element's classes.
  *Why:* if one entry holds classes for two elements, both elements get them, and you cannot change them for just one.

```tsx
// ❌ a hand-built string, and one entry with classes for two elements
const className = `${styles.root} ${size === 'sm' ? styles.smallRoot : ''}`;
const item = cva('', { variants: { size: { sm: `${styles.smallRoot} ${styles.smallLabel}` } } });

// ✅ one table per element; with two tables, the default moves to the signature
const root = cva(styles.root, { variants: { size: { sm: styles.smallRoot, md: styles.mediumRoot } } });
const label = cva(styles.label, { variants: { size: { sm: styles.smallLabel, md: styles.mediumLabel } } });
```

**Forwarding props and refs**

- Every prop the component declares itself MUST be named in the destructuring, so the rest object holds only the element's attributes. NEVER name the element's own attributes there.
  *Why:* a prop the element does not know reaches the DOM as an unknown attribute. React warns about it and the browser renders it.
- The rest object MUST be forwarded to the component's root element, and to no other element.
- A visual default MUST come before the spread, so a consumer's value replaces it. An attribute that the component's behaviour or accessibility needs MUST come after the spread, so nobody can replace it.
  *Why:* the position decides which value wins, and the two cases need opposite positions.

```tsx
// ❌ the spread comes last, so a consumer's aria-expanded can contradict the real state
const Subject = ({ isOpen, ...rest }: SubjectProps) => <button aria-expanded={isOpen} {...rest} />;

// ✅ the size default can be replaced, the announced state cannot
const Subject = ({ size = 'md', isOpen, ...rest }: SubjectProps) => (
  <button data-size={size} {...rest} aria-expanded={isOpen} />
);
```

- A component MUST let a consumer reach its root element through a `ref`, in the way its React version provides. NEVER expose it under another prop name.
  *Why:* focusing, measuring and positioning it from outside is the consumer's job.
- If a ref is both forwarded and used inside the component, the two MUST be merged into one callback ref. NEVER set two refs on one element so that one overwrites the other.
- When a composite's subcomponent needs handlers or `aria-*` attributes on an element that also gets forwarded props, it MUST merge them, not replace them.
  *Why:* forwarding replaces a whole value. Without merging, a consumer's `onClick` on a trigger would stop the trigger from opening.

**Composition**

- Content MUST be passed as a prop only in these cases, decided by taking the first case that applies:
  *Why:* a consumer cannot restructure content passed as a prop, or render it with another element. So the exceptions are exactly the cases where the consumer has nothing to reach.
  - the component renders the content in a loop it owns (a virtualised or windowed collection)
  - the content is a single text value with no inner structure, and the component renders it in one element it fully controls
  - **STOP**: neither applies? The content is `children`, and every region a consumer needs to reach is its own subcomponent.

```tsx
// ❌ <Subject.Root title="Label" footer={<Action />} /> — no region can be styled or reordered

// ✅
<Subject.Root><Subject.Header><Subject.Title>Label</Subject.Title></Subject.Header></Subject.Root>
<Subject text="Label" />
<Subject items={rows} renderRow={renderRow} />
```

- A prop that carries content MUST accept `ReactNode`. It MUST NOT grow later into several sibling content props: when a second one is needed, the component moves to subcomponents.
- A composite MUST be used through one namespace object whose properties are its subcomponents (`Subject.Root`, `Subject.Header`), never through separate flat exports (`SubjectHeader`).
- A part MUST be named after its role (`Root`, `Trigger`, `Content`, `Title`, `Item`), never after its look or its position.
- The component MUST decide which element it renders. If a case needs a different element (a button that is a link), the component MUST get it through a named prop that it handles itself (`href`), never by letting the consumer pass the element. The one exception is a `Trigger`: it takes the element that opens what it controls.
  *Why:* the element carries the styles, the role and the keyboard behaviour that the component was tested with. Merging a consumer's element with the component's props, handlers and refs silently loses one of them.
- State that subcomponents share MUST pass through a context created in the composite's own folder. NEVER inspect or clone children to pass it (`Children.map`, `cloneElement`).
  *Why:* walking the children forces one fixed nesting, so the component breaks when a consumer wraps a subcomponent in their own element.
- A subcomponent that needs that context MUST throw when rendered outside its root, with a message that names both components.

**Types**

- The props type MUST be exported as `[Component]Props`.
- A type that a consumer can reach through the props type (`[Component]Props['value']`) MUST NOT be exported. The consumer derives it from the props type.
- The props type MUST extend the props of the rendered element, instead of declaring DOM attributes again.
- Variant props MUST be derived from the variant table (`VariantProps<typeof …>`), never declared again next to it.
  *Why:* a copied union stops matching the table, and nothing fails. Then the types accept a variant that maps to no class.

**Accessibility**

- An interactive element MUST be the native control for the job.
  *Why:* the native control brings keyboard behaviour, focus, and the disabled and invalid states. Otherwise you must rebuild each of them by hand.
- A control MUST have an accessible name from its content, its label, or an explicit attribute.
- An icon-only control MUST have an accessible name. If its action is always the same, use a default label that no prop can override. Otherwise use an `'aria-label'` prop, required when no generic label fits.
- A change that is not visible where the focus is MUST be announced (`aria-live`, or a role that announces).

**Theming**

- A component MUST NOT read the theme (no prop, context or media query for it). Its look follows the theme only through the semantic tokens.
  *Why:* one component that reads the theme brings back the logic the token scopes made unnecessary, and it breaks inside a nested themed area.

**Tooling: React 18**

This group applies only when the codebase's manifest resolves React to 18.

- A component that takes a `ref` MUST be wrapped in `forwardRef`.
- The props type MUST be built from the element's props without `ref` (`ComponentPropsWithoutRef<'button'>`). It MUST NOT declare `ref`.
- Both the element type and the props type MUST be passed to the wrapper (`forwardRef<HTMLButtonElement, SubjectProps>`).
