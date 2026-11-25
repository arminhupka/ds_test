import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const WORKDIR = '/work';

const require = createRequire(import.meta.url);
const { version }: { version: string } = JSON.parse(readFileSync(require.resolve('playwright/package.json'), 'utf-8'));
const image = `mcr.microsoft.com/playwright:v${version}-noble`;

// Nx takes the arguments, so `--projects=@mini-ui/base` narrows the run; `--update` accepts new baselines.
const isUpdate = process.argv.includes('--update');
const nxArgs = process.argv.slice(2).filter((arg) => arg !== '--update');
const args = [...nxArgs, ...isUpdate ? ['--', '-u'] : []].join(' ');

// Snapshots are taken in Linux, as in CI; the container keeps its own node_modules so the host's stays untouched.
const result = spawnSync('docker', [
    'run',
    '--rm',
    '-v', `${process.cwd()}:${WORKDIR}`,
    '-v', `${WORKDIR}/node_modules`,
    '-w', WORKDIR,
    image,
    'sh', '-c', `npm ci && npx nx run-many -t test:storybook ${args}`,
], { stdio: 'inherit' });

process.exitCode = result.status ?? 1;
