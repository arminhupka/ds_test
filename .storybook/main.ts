import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';

import { defineStorybookVis } from 'storybook-addon-vis/node';

import type { StorybookConfig } from '@storybook/react-vite';

const REPO_ROOT = path.join(import.meta.dirname, '..');
const PACKAGES_DIR = path.join(REPO_ROOT, 'packages');

// Storybook reads story paths relative to this folder.
const fromConfigDir = (target: string) => path.relative(import.meta.dirname, target);

// Run from the repository root it shows every package, each under its own heading; run from a package, only that package.
const stories = (): StorybookConfig['stories'] => {
    const cwd = process.cwd();

    if (cwd !== REPO_ROOT) {
        return [`${fromConfigDir(path.join(cwd, 'src'))}/**/*.@(mdx|stories.@(ts|tsx))`];
    }

    // A package with no components yet has nothing to show.
    return readdirSync(PACKAGES_DIR).filter((name) => existsSync(path.join(PACKAGES_DIR, name, 'vite.config.ts'))).map((name) => ({
        directory: fromConfigDir(path.join(PACKAGES_DIR, name, 'src')),
        titlePrefix: name,
    }));
};

// A package keeps its snapshots in its own `__vis__`, as the Vitest run writes them; each story is looked up in every package's.
const visProjects = () => {
    const cwd = process.cwd();
    const packageDirs = cwd === REPO_ROOT
        ? readdirSync(PACKAGES_DIR).map((name) => path.join(PACKAGES_DIR, name)).filter((dir) => existsSync(path.join(dir, 'vite.config.ts')))
        : [cwd];

    return packageDirs.map((dir) => ({
        snapshotRootDir: path.join(dir, '__vis__'),
        snapshotSubpath: ({ subpath }: { subpath: string }) => path.relative(dir, path.resolve(cwd, subpath)),
    }));
};

const config: StorybookConfig = {
    stories: stories(),
    addons: [
        '@storybook/addon-vitest',
        '@storybook/addon-a11y',
        '@storybook/addon-docs',
        defineStorybookVis({ visProjects: visProjects() }),
    ],
    framework: '@storybook/react-vite',
    core: {
        builder: {
            name: '@storybook/builder-vite',
            options: { viteConfigPath: path.join(import.meta.dirname, 'vite.config.ts') },
        },
    },
    env: (env) => ({
        ...env,
        PKG_NAME: process.env.npm_package_name ?? '',
        PKG_VERSION: process.env.npm_package_version ?? '',
        CI_COMMIT_REF_NAME: process.env.CI_COMMIT_REF_NAME ?? '',
    }),
};

export default config;
