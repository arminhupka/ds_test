import { TranslationsContext } from '@mini-ui/base/translations-context';

import type { Decorator } from '@storybook/react-vite';

interface LabelTexts {
    EN?: string;
}

// The sources are read raw, as the translations plugin turns an imported file into label names.
const sources = import.meta.glob<string>('../../packages/*/src/**/translations.json', {
    query: '?raw',
    import: 'default',
    eager: true,
});

type Labels = Record<string, LabelTexts | string>;

// The backend would return the texts of the module; stories take the English ones from the files.
const translations = Object.fromEntries(
    Object.values(sources)
        .flatMap((source) => Object.entries(JSON.parse(source) as Labels))
        .flatMap(([name, texts]) => (typeof texts === 'object' && texts.EN !== undefined ? [[name, texts.EN]] : []))
);

const withTranslations: Decorator = (Story) => (
    <TranslationsContext translations={translations}>
        <Story />
    </TranslationsContext>
);

export { withTranslations };
