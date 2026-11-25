import js from '@eslint/js';
import nx from '@nx/eslint-plugin';
import tseslint from 'typescript-eslint';

// Which package may import which: every package may use icons, every one but icons may use base,
// domains may also use platform, and nothing imports a domain.
const LAYERS = [
    { sourceTag: 'layer:icons', onlyDependOnLibsWithTags: [] },
    { sourceTag: 'layer:base', onlyDependOnLibsWithTags: ['layer:icons'] },
    { sourceTag: 'layer:platform', onlyDependOnLibsWithTags: ['layer:icons', 'layer:base'] },
    { sourceTag: 'layer:domain', onlyDependOnLibsWithTags: ['layer:icons', 'layer:base', 'layer:platform'] },
];

const config = tseslint.config(
    { ignores: ['**/dist/**', '**/dist_storybook/**', '**/node_modules/**', '.design-sync/**', '.ds-sync/**', 'ds-bundle/**'] },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['packages/*/src/**/*.{ts,tsx}'],
        plugins: { '@nx': nx },
        rules: {
            '@nx/enforce-module-boundaries': ['error', { depConstraints: LAYERS, allow: ['#src/**'] }],
        },
    },
);

export default config;
