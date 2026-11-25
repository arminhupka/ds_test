import { useEffect } from 'react';
import { useGlobals } from 'storybook/preview-api';
import {
    DEFAULT_FONT, FONTS, getStylesheetUrl, isGoogleFont,
} from './fonts.ts';

import type { Decorator } from '@storybook/react-vite';

// Loads the font picked in the toolbar and sets it on the page; Tahoma stays the fallback.
const withFont: Decorator = (Story) => {
    const [{ font }] = useGlobals();
    const family = typeof font === 'string' && FONTS.includes(font) ? font : DEFAULT_FONT;

    useEffect(() => {
        const id = `font-${family}`;

        if (isGoogleFont(family) && !document.getElementById(id)) {
            const link = document.createElement('link');

            link.id = id;
            link.rel = 'stylesheet';
            link.href = getStylesheetUrl(family);
            document.head.append(link);
        }
        document.body.style.fontFamily = `"${family}", Tahoma, sans-serif`;

        return () => {
            document.body.style.fontFamily = '';
        };
    }, [family]);

    return <Story />;
};

export { withFont };
