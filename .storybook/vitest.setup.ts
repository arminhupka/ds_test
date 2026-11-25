import {
    afterEach,
    decorators,
    initialGlobals,
    parameters,
} from '@storybook/addon-a11y/preview';
import { setProjectAnnotations } from '@storybook/react-vite';
import { vis, visAnnotations } from 'storybook-addon-vis/vitest-setup';
import { beforeAll } from 'vitest';
import projectAnnotations from './preview.ts';

import type { Preview } from '@storybook/react-vite';

const a11yAnnotations: Preview = {
    afterEach, decorators, initialGlobals, parameters,
};

// Snapshots render with the system fallback, so they never wait on a font from the network.
const snapshotAnnotations: Preview = {
    initialGlobals: { font: 'Tahoma' },
};

const annotations = setProjectAnnotations([
    a11yAnnotations,
    projectAnnotations,
    snapshotAnnotations,
    visAnnotations,
]);

beforeAll(annotations.beforeAll);
vis.setup();
