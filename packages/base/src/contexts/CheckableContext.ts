import { createContext } from 'react';

interface CheckableContextValue {
    accent: 'selection' | 'automation';
    size: 'sm' | 'md';
}

/** The look a `ChoicePill` gives the checkbox, radio or switch inside it, unless the control sets its own. */
const CheckableContext = createContext<Partial<CheckableContextValue> | null>(null);

export { CheckableContext };
export type { CheckableContextValue };
