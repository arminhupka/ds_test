import { forwardRef } from 'react';
import { ButtonGroupContext } from '#src/contexts/ButtonGroupContext.ts';
import '#src/styles/design-system.css';
import styles from './ButtonGroup.module.css';

import type { ComponentPropsWithoutRef } from 'react';
import type { ButtonGroupLook } from '#src/contexts/ButtonGroupContext.ts';

type ButtonGroupRootProps = Omit<ComponentPropsWithoutRef<'div'>, 'className' | 'style'> & {
    /** The fill of every segment: `primary` filled, `secondary` outlined. */
    variant?: ButtonGroupLook['variant'];
    /** What the group's action means, the same for every segment. */
    intent?: ButtonGroupLook['intent'];
    /** Height and type size of every segment. */
    size?: ButtonGroupLook['size'];
};

/**
 * A row of buttons that share one frame. Its segments take the look given here.
 */
const ButtonGroupRoot = forwardRef<HTMLDivElement, ButtonGroupRootProps>(({
    variant = 'primary',
    intent = 'positive',
    size = 'md',
    ...rest
}, ref) => (
    <ButtonGroupContext.Provider value={{ variant, intent, size }}>
        <div
            className={styles.root}
            {...rest}
            role="group"
            ref={ref}
        />
    </ButtonGroupContext.Provider>
));

ButtonGroupRoot.displayName = 'ButtonGroupRoot';

export { ButtonGroupRoot };
export type { ButtonGroupRootProps };
