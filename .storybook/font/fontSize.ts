// The Platform's root size, which the tokens' `rem` values are relative to.
const DEFAULT_FONT_SIZE = 12;
const MIN_FONT_SIZE = 8;
const MAX_FONT_SIZE = 32;

const readFontSize = (value: unknown) => (typeof value === 'number' ? value : DEFAULT_FONT_SIZE);

export {
    DEFAULT_FONT_SIZE,
    MAX_FONT_SIZE,
    MIN_FONT_SIZE,
    readFontSize,
};
