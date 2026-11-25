import { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox';
import { forwardRef } from 'react';
import styles from './Checkbox.module.css';

import type { CheckboxIndicatorProps as BaseCheckboxIndicatorProps } from '@base-ui/react/checkbox';
import type { WithoutRenderProps } from '#src/types.ts';

type CheckboxIndicatorProps = Omit<WithoutRenderProps<BaseCheckboxIndicatorProps>, 'children'>;

const checkIcon = (
    <svg
        aria-hidden
        className={styles.icon}
        fill="none"
        viewBox="0 0 16 16"
    >
        <path
            d="M3.5 8.5 6.5 11.5 12.5 4.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);

const dashIcon = (
    <svg
        aria-hidden
        className={styles.icon}
        fill="none"
        viewBox="0 0 16 16"
    >
        <path
            d="M4 8h8"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
        />
    </svg>
);

const renderIndicator: NonNullable<BaseCheckboxIndicatorProps['render']> = (renderProps, state) => (
    <span {...renderProps}>
        {state.indeterminate ? dashIcon : checkIcon}
    </span>
);

/**
 * The check mark, or a dash while the checkbox is indeterminate; shown only when checked.
 */
const CheckboxIndicator = forwardRef<HTMLSpanElement, CheckboxIndicatorProps>((props, ref) => (
    <BaseCheckbox.Indicator
        className={styles.indicator}
        {...props}
        ref={ref}
        render={renderIndicator}
    />
));

CheckboxIndicator.displayName = 'CheckboxIndicator';

export { CheckboxIndicator };
export type { CheckboxIndicatorProps };
