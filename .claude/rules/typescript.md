---
id: typescript
description: Rules for TypeScript files
paths: ["**/*.ts", "**/*.tsx"]
---

# TypeScript

**Types**

- A value of unknown type MUST be typed `unknown` and narrowed before use.
- `[lint]` NEVER use a type assertion (`as`) to make the checker pass. Use a type guard, or `satisfies` to check a literal against a type. A const assertion (`as const`) is not a type assertion, and you MAY use it.
- `[lint]` A set of allowed values MUST be a union of string literals. NEVER declare an `enum`.
- If another module already types something, a type for the same thing MUST be derived from it (`Parameters<typeof …>[0]`, `ComponentProps<typeof …>`), never declared again.
  *Why:* a copied type stops matching its source, and nothing reports it.
