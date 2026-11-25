import { useEffect } from 'react';
import { useGlobals } from 'storybook/preview-api';
import { readFontSize } from './fontSize.ts';

import type { Decorator } from '@storybook/react-vite';

// Sets the root font size stepped in the toolbar, so every `rem` value follows it.
const withFontSize: Decorator = (Story) => {
    const [{ fontSize }] = useGlobals();
    const size = readFontSize(fontSize);

    useEffect(() => {
        document.documentElement.style.fontSize = `${size}px`;

        return () => {
            document.documentElement.style.fontSize = '';
        };
    }, [size]);

    return <Story />;
};

export { withFontSize };
