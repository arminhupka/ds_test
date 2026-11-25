import type { Decorator } from '@storybook/react-vite';
import type { CSSProperties } from 'react';

interface FrameOverride {
    width: string;
    /** Limits the height too, for content that scrolls inside the story. */
    height?: string;
}

type FrameParameter = true | FrameOverride;

const DEFAULT_FRAME_WIDTH = '160px';

const FRAME_STYLE: CSSProperties = {
    resize: 'horizontal',
    overflow: 'auto',
    border: '1px dashed var(--ds_color-border-strong)',
    boxSizing: 'border-box',
};

// Sets the width of a story, so wrapping and truncation can be checked at any width.
// The default width fits most stories; a story overrides it only when the default hides its case.
const withFrame: Decorator = (Story, context) => {
    const frame: FrameParameter | undefined = context.parameters.frame;

    if (!frame) {
        return <Story />;
    }

    const width = frame === true ? DEFAULT_FRAME_WIDTH : frame.width;
    const height = frame === true ? undefined : frame.height;

    return (
        <div
            style={{
                ...FRAME_STYLE,
                inlineSize: width,
                blockSize: height,
                resize: height === undefined ? 'horizontal' : 'both',
            }}
        >
            <Story />
        </div>
    );
};

export { withFrame };
export type { FrameParameter };
