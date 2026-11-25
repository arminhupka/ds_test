import { useContext, useMemo } from 'react';
import { TranslationsValueContext } from './TranslationsValueContext';

import type { ReactNode } from 'react';
import type { Translations } from './TranslationsValueContext';

interface TranslationsContextProps {
    /** The texts of the translation module, by label name, as the backend returns them. Added to the enclosing context's. */
    translations: Translations;
    children?: ReactNode;
}

const TranslationsContext = ({ translations, children }: TranslationsContextProps) => {
    const inherited = useContext(TranslationsValueContext);
    const merged = useMemo(() => ({ ...inherited, ...translations }), [inherited, translations]);

    return (
        <TranslationsValueContext.Provider value={merged}>
            {children}
        </TranslationsValueContext.Provider>
    );
};

TranslationsContext.displayName = 'TranslationsContext';

export { TranslationsContext };
export type { TranslationsContextProps };
