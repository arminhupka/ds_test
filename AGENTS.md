# AGENTS.md

## What this repository is

A reduced copy of a React component library repository, used to test the design sync. It keeps the structure, the tooling and the rules of the original, but only one package (`@mini-ui/base`) with two components: `Button` and `Input`.

| Package | Folder | What it holds |
|---|---|---|
| `@mini-ui/base` | `packages/base` | The design system: the base components every module builds on, and the design tokens in `src/styles/design-system.css`. |

In the full repository `base` sits under `platform` and the domain packages; here nothing else exists, so there is nothing to import from or to be imported by. ESLint still checks the layers (`@nx/enforce-module-boundaries`) using the `layer:*` tag in the package's `package.json`.

`design-system.css` is the only source of tokens. It has two tiers: palette tokens with raw values, and semantic tokens that stylesheets use. Each base component that uses a token imports this file, so every entry point brings the tokens with it. The build outputs it once, as `dist/design-system.css`, and exports it as `@mini-ui/base/tokens.css`.

The semantic colors have two theme scopes in that file: `:root, [data-theme="light"]` and `[data-theme="dark"]`. The closest ancestor with a `data-theme` decides the colors, so a page, an area or a popup can switch theme without a prop; no component picks a dark color by hand.
Token names follow `--ds_<name>` (`--ds_color-text-primary`). A custom property a component declares for itself follows `--ds_<package>-<component>-<name>` (`--ds_base-button-accent`).

## Status

The library is a work in progress and no module uses it yet. Until one does, backward compatibility does not matter: if a simpler design exists, propose it, even if it is a breaking change or a rewrite.

## Stack

- **React 18**: the Platform is still on 18.
- **Base UI** (`@base-ui/react`): the headless layer under every component. It handles behaviour, focus, layering and accessibility.
- **CSS Modules**: component-scoped styles. Only `*.module.css` files are scoped; a plain `.css` file is global.
- **cva** (`class-variance-authority`): maps variant props to classes. It runs on every render.
- **Storybook**: the component docs, and the stories that interaction and visual tests run.
- **Vite** and **Vitest**: the build, and the unit, interaction and visual tests.
- **Nx** over npm workspaces: runs a script in every package, or only in those given with `--projects`, and caches results.

## Architecture

- **Entry points.** Each folder directly in a package's `src/components/` that has an `index.ts` is one entry point, named after the folder. `src/components/icon-button/` builds `dist/icon-button.js`, imported as `@mini-ui/base/icon-button`. Nothing needs to be registered: the `exports` map in `package.json` uses wildcards over `dist`.
- **Public API.** A component's `index.ts` is all a consumer can import. Everything it exports must stay backward-compatible once a module uses it.
- **Shared code.** Code that several components of a package use lives in that package's `src/hooks/`, `src/contexts/`, `src/styles/`, `src/utils/` or `src/types.ts`. `src/components/` holds only what a consumer imports: components, and the hooks and contexts that are public.
- **Story utilities.** `.storybook/` also holds what stories of every package share, imported as `@storybook-local/*`. `variants/VariantTable.tsx` is the shared variant table: one row per combination of props, with the props printed next to what they render.
- **Build.** `@mini-ui/*`, `react` and `react-dom` are never bundled; they stay external.
- **Translations.** Texts a component shows to users are translated. `TranslationsContext` (in `base`) provides the translated texts to the components below it.

## Configuration

Vite, Vitest and Storybook are set up once, for all packages. A package's own config file only calls the shared one.

| What | File | Based on |
|---|---|---|
| Build, dev server, Vitest projects | `packages/*/vite.config.ts` | `config/vite.ts`, `config/vitest.ts` |
| Storybook | `.storybook/*` | — |
| Visual snapshots in the same environment as CI | `config/snapshot-tests.ts` | — |
| Task running and caching | `nx.json` | — |
| ESLint | `eslint.config.js` | `typescript-eslint`, `@nx/eslint-plugin` |
| TypeScript | `tsconfig.json`, extended by `packages/*/tsconfig.json` | — |

The only local TypeScript setting that is not a compiler option is the packages' `paths`.

## Commands

Run from the repository root, a command covers every package. Use `npx nx run @mini-ui/base:<script>` for one package.

| Command | What it does, and when to run it |
|---|---|
| `npm run lint` | ESLint. After every change. |
| `npm run types` | `tsc --noEmit`. After every change to a `.ts` or `.tsx` file. |
| `npm test` | Unit tests. After every change to a `.ts` or `.tsx` file. |
| `npm run test:interaction` | Stories' `play` functions in a browser, without snapshots. After every change to a component, a story or the Storybook config. |
| `npm run test:storybook:local` | Visual snapshots, in the same environment as CI. After every change to how a component looks. |
| `npm run test:storybook:update` | The same, saving the current look as the new baseline. After an intended visual change; commit the new snapshots with it. |
| `npm run test:storybook` | Visual snapshots in the current environment. Used by CI. |
| `npm run build` | The library build. After every change to the build config. |
| `npm start` | Storybook on port 6006. |

## Rules

Rules live in `.claude/rules/`, one file per kind of file. The `paths` in each file's frontmatter say which files it applies to. Before you change a file, read every rule file whose `paths` match it. Files with the `project-` prefix are specific to this project. The others never name anything from this project, so they can be copied to another project as they are.

The rules below are about this repository's architecture, so they apply to every change.

**Packages and imports**

- A package MUST import only from the layers below it. A domain NEVER imports another domain.
- An import that crosses a folder inside a package MUST use the `#src/*` alias (`package.json#imports`).
- A package MUST import another package of this repository only by its public subpath (`@mini-ui/base/button`), NEVER by a path to its files.
- NEVER edit `version` in a `package.json` or a `@mini-ui/*` version range.
- A package MUST list the `@mini-ui/*` packages, `react` and `react-dom` it uses in `peerDependencies`, NEVER in `dependencies`.
  *Why:* that way the consumer installs each of them once.

**Components and entry points**

- An `index.ts` MUST only re-export. NEVER put logic in it.
- A component's `index.ts` MUST export the component and its `[Component]Props`. It exports a hook or a type only if a consumer needs it.
- A component's folder MUST be its name in kebab-case, and the file that declares it MUST be its name (`icon-button/IconButton.tsx`).
- A subcomponent MUST be declared in its own file, `[Component][Role].tsx`, in the parent component's folder. It gets its own folder, `[Component][Role]/`, only once it has more than one file.
