import { Fragment } from 'react';

import type { CSSProperties, ReactNode } from 'react';

type Combination = Record<string, unknown>;

interface VariantTableProps<P extends Combination> {
    /** One row per combination: the props that make it. A prop set to `undefined` is left out of the row's name. */
    rows: readonly P[];
    /** Renders the component with the props of one row. */
    children: (props: P) => ReactNode;
}

const TABLE_STYLE: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'max-content auto',
    alignItems: 'center',
    gap: 'var(--ds_space-3) var(--ds_space-4)',
};

const NAME_STYLE: CSSProperties = {
    fontFamily: 'monospace',
    fontSize: 'var(--ds_font-size-sm)',
    lineHeight: 'var(--ds_line-height-sm)',
    color: 'var(--ds_color-text-secondary)',
    whiteSpace: 'nowrap',
};

// Written as JSX attributes, so the name reads like the code that renders the row.
const toAttribute = (name: string, value: unknown) => {
    if (value === true) {
        return name;
    }

    return typeof value === 'string' ? `${name}="${value}"` : `${name}={${String(value)}}`;
};

const toRowName = (props: Combination) => {
    const attributes = Object.entries(props)
        .filter(([, value]) => value !== undefined)
        .map(([name, value]) => toAttribute(name, value));

    return attributes.length > 0 ? attributes.join(' ') : 'default';
};

/**
 * Shows every combination of a component's props in one story: the props of each row on the left,
 * the component they render on the right. One story, so one snapshot compares them all.
 */
const VariantTable = <P extends Combination>({ rows, children }: VariantTableProps<P>) => (
    <div style={TABLE_STYLE}>
        {rows.map((props) => {
            const name = toRowName(props);

            return (
                <Fragment key={name}>
                    <code style={NAME_STYLE}>{name}</code>
                    <div>{children(props)}</div>
                </Fragment>
            );
        })}
    </div>
);

export { VariantTable };
export type { VariantTableProps };
