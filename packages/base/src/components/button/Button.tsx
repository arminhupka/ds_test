import { Button as BaseButton } from '@base-ui/react/button';
import { cva } from 'class-variance-authority';
import { forwardRef, useContext } from 'react';
import { ButtonGroupContext } from '#src/contexts/ButtonGroupContext.ts';
import '#src/styles/design-system.css';
import styles from './Button.module.css';
import { ButtonSpinner } from './ButtonSpinner';

import type { ButtonProps as BaseButtonProps } from '@base-ui/react/button';
import type { VariantProps } from 'class-variance-authority';
import type { WithoutRenderProps } from '#src/types.ts';

const button = cva(styles.root, {
    variants: {
        variant: {
            primary: styles.primary,
            secondary: styles.secondary,
            tertiary: styles.tertiary,
        },
        intent: {
            positive: styles.positive,
            danger: styles.danger,
            neutral: styles.neutral,
            automation: styles.automation,
        },
        size: {
            sm: styles.sm,
            md: styles.md,
        },
        width: {
            auto: null,
            full: styles.full,
        },
        grouped: {
            true: styles.grouped,
            false: null,
        },
    },
    defaultVariants: {
        variant: 'primary',
        intent: 'positive',
        size: 'md',
        width: 'auto',
    },
});

type ButtonVariants = VariantProps<typeof button>;

// A tertiary button is always link-coloured, so it takes no intent.
type ButtonEmphasisProps = {
    /** Visual weight: filled, outlined, or a text-only link style. */
    variant?: Exclude<ButtonVariants['variant'], 'tertiary'>;
    /** What the action means: a regular, a destructive, a neutral one, or one AI carries out. */
    intent?: ButtonVariants['intent'];
} | {
    /** Visual weight: filled, outlined, or a text-only link style. */
    variant: 'tertiary';
    intent?: never;
};

type ButtonProps = WithoutRenderProps<BaseButtonProps> & ButtonEmphasisProps & {
    /** Control height and type size. */
    size?: ButtonVariants['size'];
    /** `full` stretches the button across its container, as for the one action closing a form or panel. */
    width?: ButtonVariants['width'];
    /** Shows a spinner over the label and ignores clicks, keeping the button's size. */
    loading?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    variant,
    intent,
    size,
    width,
    loading = false,
    children,
    onClick,
    ...rest
}, ref) => {
    const isGrouped = useContext(ButtonGroupContext) !== null;

    return (
        <BaseButton
            className={button({ variant, intent, size, width, grouped: isGrouped })}
            {...rest}
            // Not `disabled`: a loading button stays focusable and looks enabled.
            aria-busy={loading || undefined}
            data-loading={loading ? '' : undefined}
            onClick={(event) => {
                if (!loading) {
                    onClick?.(event);
                }
            }}
            ref={ref}
        >
            {children}
            {loading && <ButtonSpinner />}
        </BaseButton>
    );
});

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
