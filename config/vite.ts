/// <reference types="vitest/config" />
import { createHash } from 'node:crypto';
import { globSync, readFileSync } from 'node:fs';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import dts from 'unplugin-dts/vite';
import { defineConfig } from 'vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { createVitestConfig } from './vitest.ts';

import type { ConfigEnv, UserConfig } from 'vite';

interface PackageJson {
    name: string;
    version: string;
    dependencies?: Record<string, string>;
    peerDependencies?: Record<string, string>;
}

// Each component folder is one entry, named after it: `src/components/icon-button` builds `dist/icon-button.js`.
const findEntries = () => Object.fromEntries(globSync('src/components/*/index.ts')
    .map((file) => [path.basename(path.dirname(file)), file]));

// Class names carry the package's name and version, so two versions of a package on one page never share one.
const createScopedName = (root: string, pkg: PackageJson) => (name: string, filename: string) => {
    const hash = createHash('sha256')
        .update(`${pkg.name}@${pkg.version}\0${path.relative(root, filename)}\0${name}`)
        .digest('base64url')
        .replaceAll(/[-_]/g, '')
        .slice(0, 8);

    return `c${hash}`;
};

/**
 * The Vite config of a package in this repository: its library build, and its Vitest projects.
 * Another package of the repository resolves from its source, through the root `tsconfig.json`'s `paths`.
 */
const createConfig = ({ command }: ConfigEnv): UserConfig => {
    const root = process.cwd();
    const pkg: PackageJson = JSON.parse(readFileSync(path.join(root, 'package.json'), 'utf-8'));
    const externals = [...Object.keys(pkg.dependencies ?? {}), ...Object.keys(pkg.peerDependencies ?? {})];
    const isBuild = command === 'build';

    return defineConfig({
        resolve: {
            tsconfigPaths: true,
        },
        css: {
            modules: {
                generateScopedName: isBuild ? createScopedName(root, pkg) : '[name]__[local]___[hash:base64:5]',
            },
        },
        plugins: [
            react(),
            ...isBuild
                ? [
                    libInjectCss(),
                    dts({
                        include: 'src',
                        exclude: ['**/*.stories.*', '**/*.test.*', '**/docs/**'],
                        entryRoot: 'src',
                        // Other packages' source is reached through `paths`, so it is part of the program without being emitted.
                        compilerOptions: { rootDir: path.join(import.meta.dirname, '..') },
                        outDirs: 'dist/types',
                        // TypeScript keeps `#src` in the declarations it writes, but `src` is not published;
                        // other packages' subpaths stay as they are, as the published types import them.
                        aliases: [{ find: /^#src\//, replacement: `${path.join(root, 'src')}/` }],
                        pathsToAliases: false,
                    }),
                ]
                : [],
        ],
        build: {
            cssCodeSplit: true,
            lib: {
                entry: findEntries(),
                formats: ['es'],
            },
            rolldownOptions: {
                // Another package of this repository stays external even before it is listed as a dependency.
                external: (id) => id.startsWith('@mini-ui/') || externals.some((dependency) => id === dependency || id.startsWith(`${dependency}/`)),
            },
        },
        test: createVitestConfig(),
    });
};

export { createConfig };
