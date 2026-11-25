import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import '#src/styles/design-system.css';
import styles from './Badge.module.css';

import type { VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithoutRef } from 'react';

const badge = cva(styles.root, {
    variants: {
        intent: {
            positive: styles.positive,
            neutral: styles.neutral,
        },
    },
    defaultVariants: {
        intent: 'neutral',
    },
});

type BadgeProps = Omit<ComponentPropsWithoutRef<'span'>, 'className' | 'style'> & VariantProps<typeof badge>;

/**
 * A small pill with a count or a short status, such as the number of selected options.
 */
const Badge = forwardRef<HTMLSpanElement, BadgeProps>(({ intent, ...rest }, ref) => (
    <span
        className={badge({ intent })}
        {...rest}
        ref={ref}
    />
));

Badge.displayName = 'Badge';

export { Badge };
export type { BadgeProps };
