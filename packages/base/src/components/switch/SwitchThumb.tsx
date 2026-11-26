import { Switch as BaseSwitch } from '@base-ui/react/switch';
import { forwardRef } from 'react';
import styles from './Switch.module.css';

import type { SwitchThumbProps as BaseSwitchThumbProps } from '@base-ui/react/switch';
import type { WithoutRenderProps } from '#src/types.ts';

type SwitchThumbProps = WithoutRenderProps<BaseSwitchThumbProps>;

/**
 * The moving knob; sized by the enclosing `Switch.Root`.
 */
const SwitchThumb = forwardRef<HTMLSpanElement, SwitchThumbProps>((props, ref) => (
    <BaseSwitch.Thumb
        className={styles.thumb}
        {...props}
        ref={ref}
    />
));

SwitchThumb.displayName = 'SwitchThumb';

export { SwitchThumb };
export type { SwitchThumbProps };
