import { Switch as BaseSwitch } from '@base-ui/react/switch';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import '#src/styles/design-system.css';
import { useCheckable } from '#src/hooks/useCheckable.ts';
import styles from './Switch.module.css';
import type { SwitchRootProps as BaseSwitchRootProps } from '@base-ui/react/switch';
import type { VariantProps } from 'class-variance-authority';
import type { WithoutRenderProps } from '#src/types.ts';

const root = cva(styles.root, {
    variants: {
        size: {
            sm: styles.sm,
            md: styles.md,
        },
        accent: {
            selection: styles.selection,
            automation: styles.automation,
        },
    },
});

type SwitchRootVariants = VariantProps<typeof root>;

type SwitchRootProps = WithoutRenderProps<BaseSwitchRootProps> & {
    /** Track and thumb size; defaults to the enclosing pill's, `md` outside one. */
    size?: SwitchRootVariants['size'];
    /** The color when checked: `selection` for most choices, `automation` for anything the Agent or auto-fill does or suggests. Defaults to the enclosing pill's. */
    accent?: SwitchRootVariants['accent'];
};

/**
 * The switch track; holds the on/off state and renders `Switch.Thumb` inside.
 */
const SwitchRoot = forwardRef<HTMLElement, SwitchRootProps>(({
    size,
    accent,
    ...rest
}, ref) => {
    const look = useCheckable(accent, size);

    return (
        <BaseSwitch.Root
            className={root(look)}
            {...rest}
            ref={ref}
        />
    );
});

SwitchRoot.displayName = 'SwitchRoot';

export { SwitchRoot };
export type { SwitchRootProps };
