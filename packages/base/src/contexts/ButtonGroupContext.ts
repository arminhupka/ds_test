import { createContext } from 'react';
import type { ButtonProps } from '#src/components/button/index.ts';

interface ButtonGroupLook {
    variant: Exclude<NonNullable<ButtonProps['variant']>, 'tertiary'>;
    intent: NonNullable<ButtonProps['intent']>;
    size: NonNullable<ButtonProps['size']>;
}

/** Tells a button it sits in a split button group, and the look the group gives its segments. */
const ButtonGroupContext = createContext<ButtonGroupLook | null>(null);

export { ButtonGroupContext };
export type { ButtonGroupLook };
