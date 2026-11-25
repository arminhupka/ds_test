import getGlobalContext from '#src/utils/getGlobalContext.ts';

/** Translated label texts by label name, as the backend returns them. */
type Translations = Record<string, string>;

const NO_TRANSLATIONS: Translations = {};

const TranslationsValueContext = getGlobalContext<Translations>('translations', NO_TRANSLATIONS);

export { TranslationsValueContext };
export type { Translations };
