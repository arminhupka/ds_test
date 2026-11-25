import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import '#src/styles/design-system.css';
import styles from './Card.module.css';

import type { VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithoutRef } from 'react';

const card = cva(styles.root, {
    variants: {
        variant: {
            default: styles.default,
            subtle: styles.subtle,
        },
        intent: {
            neutral: null,
            automation: styles.automation,
            positive: styles.positive,
            warning: styles.warning,
            danger: styles.danger,
        },
    },
    defaultVariants: {
        variant: 'default',
        intent: 'neutral',
    },
});

type CardVariants = VariantProps<typeof card>;

// A tinted intent draws its own surface, so it takes no variant.
type CardEmphasisProps = {
    /** The surface: `default` stands out from the page; `subtle` sets a section apart on a tinted one. */
    variant?: CardVariants['variant'];
    /** What the color means: `neutral` is plain. */
    intent?: Extract<CardVariants['intent'], 'neutral'>;
} | {
    /** What the color means: `automation` marks a section the Agent or auto-fill filled in; `positive` a success; `warning` something to check; `danger` an error or problem. */
    intent: Exclude<NonNullable<CardVariants['intent']>, 'neutral'>;
    /** A tinted intent draws its own surface, so it takes no variant. */
    variant?: never;
};

type CardRootProps = Omit<ComponentPropsWithoutRef<'div'>, 'className' | 'style'> & CardEmphasisProps;

/**
 * A bordered box grouping related content, laid out as a column: a `Card.Title`, a `Card.Description` or anything else.
 */
const CardRoot = forwardRef<HTMLDivElement, CardRootProps>(({
    variant,
    intent,
    ...rest
}, ref) => (
    <div
        className={card({ variant, intent })}
        {...rest}
        ref={ref}
    />
));

CardRoot.displayName = 'CardRoot';

export { CardRoot };
export type { CardRootProps };
