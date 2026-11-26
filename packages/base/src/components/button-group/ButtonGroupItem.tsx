import { forwardRef, useContext } from 'react';
import { Button } from '#src/components/button/index.ts';
import { ButtonGroupContext } from '#src/contexts/ButtonGroupContext.ts';

import type { ButtonProps } from '#src/components/button/index.ts';

type ButtonGroupItemProps = Omit<ButtonProps, 'variant' | 'intent' | 'size' | 'width'>;

/**
 * One segment of the group, an action of its own. Its look comes from `ButtonGroup.Root`.
 */
const ButtonGroupItem = forwardRef<HTMLButtonElement, ButtonGroupItemProps>((props, ref) => {
    const group = useContext(ButtonGroupContext);

    if (group === null) {
        throw new Error('ButtonGroup.Item must be rendered inside ButtonGroup.Root.');
    }

    return (
        <Button
            {...props}
            variant={group.variant}
            intent={group.intent}
            size={group.size}
            ref={ref}
        />
    );
});

ButtonGroupItem.displayName = 'ButtonGroupItem';

export { ButtonGroupItem };
export type { ButtonGroupItemProps };
