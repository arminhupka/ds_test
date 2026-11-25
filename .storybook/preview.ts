import { createElement } from 'react';
import { DEFAULT_FONT } from './font/fonts.ts';
import { DEFAULT_FONT_SIZE } from './font/fontSize.ts';
import { withFont } from './font/withFont.tsx';
import { withFontSize } from './font/withFontSize.tsx';
import { withFrame } from './frame/withFrame.tsx';
import { withTranslations } from './translations/withTranslations.tsx';

import type { Decorator, Preview } from '@storybook/react-vite';

// Puts the chosen theme on the page root, so the canvas and every story follow the toolbar.
const withTheme: Decorator = (Story, context) => {
    document.documentElement.dataset.theme = context.globals.theme === 'dark' ? 'dark' : 'light';

    return createElement(Story);
};

const preview: Preview = {
    decorators: [withTheme, withFont, withFontSize, withTranslations, withFrame],
    globalTypes: {
        theme: {
            description: 'Theme of the canvas',
            toolbar: {
                title: 'Theme',
                icon: 'mirror',
                items: [
                    { value: 'light', title: 'Light' },
                    { value: 'dark', title: 'Dark' },
                ],
                dynamicTitle: true,
            },
        },
    },
    initialGlobals: {
        font: DEFAULT_FONT,
        fontSize: DEFAULT_FONT_SIZE,
        theme: 'light',
    },
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        a11y: {
            test: 'error',
        },
        layout: 'centered',
    },
    tags: ['autodocs', 'snapshot'],
};

export default preview;
