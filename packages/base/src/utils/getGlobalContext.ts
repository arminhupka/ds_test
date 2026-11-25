import { createContext } from 'react';

import type { Context } from 'react';

// This package's name, written out so the manifest is not bundled to read it.
const OWN_NAMESPACE = '___@mini-ui/base';
// Matches the legacy `@mini-ui/components` library's own namespace key exactly,
// so both libraries resolve the same Context instance under it.
const LEGACY_COMPONENTS_NAMESPACE = '___@mini-ui/components';

interface GetGlobalContextOptions {
    /** Resolve a Context shared with the platform's legacy `@mini-ui/components` library instead of this package's own. */
    legacy?: boolean;
}

/**
 * Resolves the React Context registered under `name` in a registry shared, via `window`,
 * with any other caller in the same namespace — so independently bundled copies of
 * a library agree on one Context instance instead of each creating their own.
 * Defaults to this package's own namespace.
 */
const getGlobalContext = <T>(
    name: string,
    defaultValue: T,
    options?: GetGlobalContextOptions
): Context<T> => {
    const namespace = options?.legacy ? LEGACY_COMPONENTS_NAMESPACE : OWN_NAMESPACE;

    // `window` is indexed by a namespace computed here, so its shape here can't be
    // declared on the real `Window` type without conflicting with its other members.
    const globalWindow = window as unknown as Record<string, Map<string, Context<unknown>> | undefined>;
    const contexts = globalWindow[namespace] ?? new Map<string, Context<unknown>>();
    globalWindow[namespace] = contexts;

    // The registry is untyped by design: it is shared, at runtime, by unrelated callers
    // each supplying their own T for the same `name`, so a per-entry type cannot be tracked.
    if (!contexts.has(name)) {
        contexts.set(name, createContext(defaultValue) as Context<unknown>);
    }

    return contexts.get(name) as Context<T>;
};

export default getGlobalContext;
