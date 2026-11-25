import { Input as BaseInput } from '@base-ui/react/input';
import { cva } from 'class-variance-authority';
import { forwardRef, useContext } from 'react';
import '#src/styles/design-system.css';
import { FrameGroupContext } from '#src/contexts/FrameGroupContext.ts';
import styles from './Input.module.css';

import type { InputProps as BaseInputProps } from '@base-ui/react/input';
import type { WithoutRenderProps } from '#src/types.ts';

type InputProps = WithoutRenderProps<BaseInputProps>;

const input = cva('', {
    variants: {
        inGroup: {
            true: styles.inGroup,
            false: styles.root,
        },
    },
});

/**
 * A single-line text control. Inside an `InputGroup` it drops its own frame, as the group draws it.
 */
const Input = forwardRef<HTMLElement, InputProps>((props, ref) => {
    const inGroup = useContext(FrameGroupContext);

    return (
        <BaseInput
            className={input({ inGroup })}
            {...props}
            ref={ref}
            // The group's frame reads the control's state through this mark.
            data-frame-input={inGroup || undefined}
        />
    );
});

Input.displayName = 'Input';

export { Input };
export type { InputProps };
