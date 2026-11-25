---
id: react
description: Rules for React components and hooks
paths: ["**/*.tsx", "**/use*.ts"]
---

# React

A component renders what its props and state give. Use an effect only as a last resort, to sync with something outside React. These rules follow <https://react.dev/learn/you-might-not-need-an-effect>.

**State and effects**

- If a value can be computed from props or state, it MUST be computed during render. NEVER keep it in state and sync it.
- State MUST NOT start from a prop, unless the prop promises to ignore later changes (`defaultValue`).
- What an interaction causes, including a call to a callback prop, MUST happen in the handler of that interaction. NEVER do it in an effect that watches the changed state.
  *Why:* an effect also runs on mount and re-mount, so it reports changes that did not happen.
- When an input changes, state MUST be reset in one of two ways: the caller sets a `key` on the component (`key={id}`), or the component adjusts the state during render by comparing with the previous input kept in state. NEVER reset it in an effect that watches the input.
- An effect MUST only sync with something outside React (the DOM, a timer, a subscription, a browser API). Its cleanup MUST undo everything it set up. Read a store outside React with `useSyncExternalStore`.
- An update based on the previous value MUST use the function form (`setIsOpen((isOpen) => !isOpen)`). NEVER mutate state or props.

**Hooks and refs**

- A file MUST declare exactly one hook and have the hook's name (`useDisclosure.ts`).
- An id that a rendered element needs (`id`, and the targets of `aria-labelledby` and `aria-describedby`) MUST come from `useId`.
- A ref's `current`, sizes, positions and computed styles MUST be read only in effects and handlers, NEVER during render. Put a measurement that must apply before the first paint in `useLayoutEffect`.
- A value that only handlers read and that is never rendered (a pointer position, the latest callback) MUST be kept in a ref, not in state.

**Re-renders**

- `memo`, `useMemo` and `useCallback` MUST be used only where a measurement shows the work matters, or where something depends on the identity (a context value, a dependency). JSX and objects that use nothing from the component MUST be declared at module level.
