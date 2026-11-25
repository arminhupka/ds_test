import { useContext } from 'react';
import { CheckableContext } from '#src/contexts/CheckableContext.ts';

import type { CheckableContextValue } from '#src/contexts/CheckableContext.ts';

/**
 * The accent and size a checkbox, radio or switch takes: its own props, else the enclosing pill's, else `selection` and `md`.
 */
const useCheckable = (
    accent: CheckableContextValue['accent'] | null | undefined,
    size: CheckableContextValue['size'] | null | undefined
): CheckableContextValue => {
    const inherited = useContext(CheckableContext);

    return {
        accent: accent ?? inherited?.accent ?? 'selection',
        size: size ?? inherited?.size ?? 'md',
    };
};

export { useCheckable };
