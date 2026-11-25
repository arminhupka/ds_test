import { useCallback, useContext } from 'react';
import { TranslationsValueContext } from './TranslationsValueContext';

type Values = Record<string, string | number>;

const PLACEHOLDER = /\{\{\s*(\w+)\s*\}\}/g;

/**
 * The function that turns a label name (`labels.close`, from a `translations.json`) into its text
 * from the enclosing `TranslationsContext`, filling its `{{name}}` placeholders from `values`.
 * A label it has no text for stays its name; a placeholder it has no value for stays as written.
 */
const useTranslate = () => {
    const translations = useContext(TranslationsValueContext);

    return useCallback((name: string, values?: Values) => {
        const text = translations[name] ?? name;

        // TODO: values should also accept React nodes, and the label HTML-like tags rendered by functions, so the result may be a node.
        return values === undefined
            ? text
            : text.replaceAll(PLACEHOLDER, (placeholder, key: string) => String(values[key] ?? placeholder));
    }, [translations]);
};

export { useTranslate };
