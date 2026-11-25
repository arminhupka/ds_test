import path from 'node:path';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { storybookVis } from 'storybook-addon-vis/vitest-plugin';

import type { PlaywrightProviderOptions } from '@vitest/browser-playwright';
import type { TestProjectInlineConfiguration, TestUserConfig } from 'vitest/config';

interface StorybookProjectOptions {
    plugins?: TestProjectInlineConfiguration['plugins'];
    setupFiles?: string[];
    contextOptions?: PlaywrightProviderOptions['contextOptions'];
}

const createStorybookProject = (
    name: string,
    configDir: string,
    { plugins = [], setupFiles, contextOptions }: StorybookProjectOptions = {}
): TestProjectInlineConfiguration => ({
    extends: true,
    plugins: [...plugins, storybookTest({ configDir })],
    test: {
        name,
        setupFiles,
        browser: {
            enabled: true,
            headless: true,
            provider: playwright({ contextOptions }),
            instances: [{ browser: 'chromium' }],
        },
    },
});

/**
 * A package's Vitest projects: `unit` over its test files, `interaction` over its stories' `play` functions,
 * and `storybook` over the same stories with visual snapshots.
 */
const createVitestConfig = (): TestUserConfig => {
    const repoRoot = path.join(import.meta.dirname, '..');
    const configDir = path.join(repoRoot, '.storybook');
    const packageDir = path.relative(repoRoot, process.cwd());

    return {
        // JUnit is the report the CI pipeline reads test results from.
        reporters: ['default', 'junit'],
        // A package whose logic all lives in components has no unit tests.
        passWithNoTests: true,
        outputFile: { junit: './junit.xml' },
        coverage: {
            provider: 'v8',
            reporter: ['cobertura', 'lcov', 'text'],
            include: ['src/**/*.{ts,tsx}'],
            exclude: ['**/*.stories.*', '**/*.test.*', '**/*.d.ts'],
        },
        projects: [
            {
                extends: true,
                test: {
                    name: 'unit',
                    environment: 'happy-dom',
                    include: ['src/**/*.test.{ts,tsx}'],
                    // jest-dom's matchers assert the outcome a user sees (`toBeDisabled`, `toHaveAttribute`).
                    setupFiles: ['@testing-library/jest-dom/vitest', path.join(import.meta.dirname, 'unit-setup.ts')],
                    clearMocks: true,
                    mockReset: true,
                    restoreMocks: true,
                    unstubGlobals: true,
                    unstubEnvs: true,
                },
            },
            createStorybookProject('interaction', configDir),
            createStorybookProject('storybook', configDir, {
                // Vitest runs from the repository root here, so snapshots are sent back into the package they belong to.
                plugins: [storybookVis({
                    snapshotRootDir: () => path.join(packageDir, '__vis__'),
                    snapshotSubpath: ({ subpath }) => path.relative(packageDir, subpath),
                })],
                setupFiles: [path.join(configDir, 'vitest.setup.ts')],
                // Components stop animating under reduced motion, so a snapshot never catches one mid-animation.
                contextOptions: { reducedMotion: 'reduce' },
            }),
        ],
    };
};

export { createVitestConfig };
