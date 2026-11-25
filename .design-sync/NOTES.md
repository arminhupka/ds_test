# Design sync notes

Package: `@mini-ui/base` (Button, Input). Shape: storybook. Target: see `.design-sync/artifact.json`.

## Build setup

- The package has no root entry and no root types file. It only has subpath exports (`@mini-ui/base/button`). The sync tool needs one entry and one `.d.ts`, so `.design-sync/make-shadow.mjs` builds a shadow package in `.design-sync/.cache/shadow/@mini-ui/base`. It copies `dist/`, adds a barrel `dist/index.js` and `dist/types/index.d.ts`, and copies `preview-base.css` and `fonts/`. The repo is not changed. `buildCmd` runs it after the package build. `cfg.entry` points at the shadow barrel. [GENERAL]
- Command for the converter: `node .ds-sync/package-build.mjs --config .design-sync/config.json --node-modules node_modules --entry .design-sync/.cache/shadow/@mini-ui/base/dist/index.js --out ./ds-bundle`
- The reference storybook is built from the repo root: `npx --no-install storybook build -c .storybook -o "$PWD/.design-sync/sb-reference"`.

## Fixes

- Decorator bundle failed (`import.meta.glob` in `.storybook/translations/withTranslations.tsx`, Vite only). Fix: `cfg.provider` is `TranslationsContext` with empty translations. No component uses translations yet. [GENERAL]
- Previews showed a serif font at the wrong size. Storybook sets root `font-size: 12px` and the Lexend font through `preview-head.html` and decorators. Fix: `.design-sync/preview-base.css` (appended through `cfg.cssEntry`) holds the root size, the body font and local Lexend `@font-face` rules. Font files are in `.design-sync/fonts/` (Lexend, OFL, from Google Fonts). `extraFonts` only reads `@font-face`, and an `@import` in an appended sheet is ignored, so neither works. [GENERAL]
- `cfg.cssEntry` and `cfg.extraFonts` paths must stay inside the package dir, which is the shadow package. That is why `make-shadow.mjs` copies the files in.
- Generated previews give a usage note whose examples read `compose(S, "Default")`, which means nothing to the design agent. Fix: both components have owned previews (`previews/Button.tsx`, `previews/Input.tsx`) written as plain JSX, one export per story name. The examples in the usage notes come from these exports. Input `LongContent` also uses the dashed resizable frame of the global `withFrame` decorator, which the sync does not run.
- Button: `cardMode: "column"` because stories are wider than a grid cell.

## Re-sync risks

- The shadow package barrel lists every `dist/<name>.js` that has `dist/types/components/<name>/index.d.ts`. A new component folder is picked up by itself.
- Owned previews mirror the stories by hand. When a story changes, update the matching preview (`[STORY_CHANGED]` shows it). Export names must stay equal to the story names.
- `preview-base.css` copies values from `.storybook/preview-head.html` (12px root) and `.storybook/font/fonts.ts` (Lexend, Tahoma fallback). Update it if those change.
- Every story of both components was graded `match` from the raw images. No story has a cap or a skip.
- The provider has no translations. Add them if a component starts to show translated text.
