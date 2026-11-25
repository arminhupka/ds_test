/** @jsxRuntime automatic */
// Without this pragma the manager bundle compiles JSX against a `React` global it does not define.
import { ParagraphIcon } from '@storybook/icons';
import { useCallback, useRef } from 'react';
import {
    IconButton, TooltipLinkList, WithTooltip,
} from 'storybook/internal/components';
import {
    addons, types, useGlobals,
} from 'storybook/manager-api';
import { DEFAULT_FONT, FONTS } from './fonts.ts';
import {
    DEFAULT_FONT_SIZE, MAX_FONT_SIZE, MIN_FONT_SIZE, readFontSize,
} from './fontSize.ts';

const STEPPER_STYLE = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 4, padding: '4px 8px' };

// One toolbar icon for the page's font and root size; the popover lists the fonts and steps the size a pixel at a time.
const TypographyTool = () => {
    const [globals, updateGlobals] = useGlobals();
    const font = typeof globals.font === 'string' ? globals.font : DEFAULT_FONT;
    const fontSize = readFontSize(globals.fontSize);

    // Storybook applies a global asynchronously, so quick clicks step from the last requested size, not the applied one.
    const requestedRef = useRef<number | null>(null);

    const stepFontSize = useCallback((step: number | null) => {
        const current = requestedRef.current ?? fontSize;
        const next = step === null
            ? DEFAULT_FONT_SIZE
            : Math.min(MAX_FONT_SIZE, Math.max(MIN_FONT_SIZE, current + step));

        requestedRef.current = next;
        updateGlobals({ fontSize: next });
    }, [fontSize, updateGlobals]);
    const decrease = useCallback(() => stepFontSize(-1), [stepFontSize]);
    const increase = useCallback(() => stepFontSize(1), [stepFontSize]);
    const reset = useCallback(() => stepFontSize(null), [stepFontSize]);

    const stepper = (
        <div style={STEPPER_STYLE}>
            <IconButton
                disabled={fontSize <= MIN_FONT_SIZE}
                onClick={decrease}
                title="Decrease font size"
            >
                −
            </IconButton>
            <IconButton
                onClick={reset}
                title="Reset font size"
            >
                {`${fontSize}px`}
            </IconButton>
            <IconButton
                disabled={fontSize >= MAX_FONT_SIZE}
                onClick={increase}
                title="Increase font size"
            >
                +
            </IconButton>
        </div>
    );

    const links = [
        FONTS.map((family) => ({
            id: family,
            title: family,
            active: family === font,
            onClick: () => updateGlobals({ font: family }),
        })),
        [{ id: 'font-size', content: stepper }],
    ];

    return (
        <WithTooltip
            closeOnOutsideClick
            placement="bottom"
            tooltip={<TooltipLinkList links={links} />}
            trigger="click"
        >
            <IconButton title={`Typography: ${font}, ${fontSize}px`}>
                <ParagraphIcon />
            </IconButton>
        </WithTooltip>
    );
};

const registerTypographyTool = () => {
    addons.register('typography', () => {
        addons.add('typography/tool', {
            type: types.TOOL,
            title: 'Typography',
            match: ({ viewMode }) => viewMode === 'story',
            render: TypographyTool,
        });
    });
};

export { registerTypographyTool };
