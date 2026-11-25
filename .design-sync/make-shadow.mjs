// Builds .design-sync/.cache/shadow/@mini-ui/base: a copy of the built dist plus a root barrel
// (JS and types), so the sync tool can see every component export. The repo itself is not changed.
import { cpSync, mkdirSync, readdirSync, rmSync, writeFileSync, readFileSync, symlinkSync, existsSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const pkgDir = path.join(root, 'packages/base');
const shadow = path.join(root, '.design-sync/.cache/shadow/@mini-ui/base');

rmSync(shadow, { recursive: true, force: true });
mkdirSync(shadow, { recursive: true });
cpSync(path.join(pkgDir, 'dist'), path.join(shadow, 'dist'), { recursive: true });
symlinkSync(path.join(pkgDir, 'src'), path.join(shadow, 'src'));

// One entry point per folder of dist/types/components that has an index.d.ts.
const componentsDir = path.join(shadow, 'dist/types/components');
const names = readdirSync(componentsDir).filter((n) => existsSync(path.join(componentsDir, n, 'index.d.ts')) && existsSync(path.join(shadow, 'dist', `${n}.js`)));

writeFileSync(path.join(shadow, 'dist/index.js'), names.map((n) => `export * from './${n}.js';`).join('\n') + '\n');
writeFileSync(path.join(shadow, 'dist/types/index.d.ts'), names.map((n) => `export * from './components/${n}';`).join('\n') + '\n');

// Page setup the Platform gives every screen; the sync tool appends it to the bundle stylesheet.
cpSync(path.join(root, '.design-sync/preview-base.css'), path.join(shadow, 'preview-base.css'));

cpSync(path.join(root, '.design-sync/fonts'), path.join(shadow, 'fonts'), { recursive: true });

const pkg = JSON.parse(readFileSync(path.join(pkgDir, 'package.json'), 'utf8'));
pkg.types = 'dist/types/index.d.ts';
pkg.main = 'dist/index.js';
pkg.module = 'dist/index.js';
writeFileSync(path.join(shadow, 'package.json'), JSON.stringify(pkg, null, 2));
console.log(`shadow package: ${names.join(', ')}`);
