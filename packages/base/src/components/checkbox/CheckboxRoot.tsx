import { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import '#src/styles/design-system.css';
import { useCheckable } from '#src/hooks/useCheckable.ts';
import styles from './Checkbox.module.css';
import type { CheckboxRootProps as BaseCheckboxRootProps } from '@base-ui/react/checkbox';
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

type CheckboxRootVariants = VariantProps<typeof root>;

type CheckboxRootProps = WithoutRenderProps<BaseCheckboxRootProps> & {
    /** Box size; defaults to the enclosing pill's, `md` outside one. */
    size?: CheckboxRootVariants['size'];
    /** The color when checked: `selection` for most choices, `automation` for anything the Agent or auto-fill does or suggests. Defaults to the enclosing pill's. */
    accent?: CheckboxRootVariants['accent'];
};

/**
 * The checkbox box; holds the checked state and renders `Checkbox.Indicator` inside.
 */
const CheckboxRoot = forwardRef<HTMLElement, CheckboxRootProps>(({
    size,
    accent,
    ...rest
}, ref) => {
    const look = useCheckable(accent, size);

    return (
        <BaseCheckbox.Root
            className={root(look)}
            {...rest}
            ref={ref}
        />
    );
});

CheckboxRoot.displayName = 'CheckboxRoot';

export { CheckboxRoot };
export type { CheckboxRootProps };
