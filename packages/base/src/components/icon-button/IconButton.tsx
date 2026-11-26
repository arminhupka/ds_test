import { Button as BaseButton } from '@base-ui/react/button';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import '#src/styles/design-system.css';
import styles from './IconButton.module.css';

import type { ButtonProps as BaseButtonProps } from '@base-ui/react/button';
import type { VariantProps } from 'class-variance-authority';
import type { WithoutRenderProps } from '#src/types.ts';

const iconButton = cva(styles.root, {
    variants: {
        variant: {
            filled: styles.filled,
            ghost: styles.ghost,
            outline: styles.outline,
            inverse: styles.inverse,
        },
        size: {
            sm: styles.sm,
            md: styles.md,
        },
    },
    defaultVariants: {
        variant: 'filled',
        size: 'md',
    },
});

type IconButtonVariants = VariantProps<typeof iconButton>;

type IconButtonProps = WithoutRenderProps<BaseButtonProps> & {
    /** Names the action for screen readers, as the icon alone carries no text. */
    'aria-label': string;
    /** `filled` sits on a tinted circle; `ghost` shows the icon alone until hovered; `outline` is a white circle with a border, matching the controls beside it; `inverse` shows a white icon, for a solid colored surface such as a toast. */
    variant?: IconButtonVariants['variant'];
    /** `md` stands on its own; `sm` sits inside a small element, such as a `Tag`, and takes a `sm` icon. Both keep the minimum pointer target. */
    size?: IconButtonVariants['size'];
};

/**
 * A round button showing only an icon, such as `CloseIcon` or `MoreIcon`, passed as its child.
 */
const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({
    variant,
    size,
    ...rest
}, ref) => (
    <BaseButton
        className={iconButton({ variant, size })}
        {...rest}
        ref={ref}
    />
));

IconButton.displayName = 'IconButton';

export { IconButton };
export type { IconButtonProps };
