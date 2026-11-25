const GOOGLE_FONTS = ['Lexend'];
const SYSTEM_FONTS = ['Tahoma'];

const FONTS = [...GOOGLE_FONTS, ...SYSTEM_FONTS];
const DEFAULT_FONT = 'Lexend';

const getStylesheetUrl = (family: string) => (
    `https://fonts.googleapis.com/css2?family=${family.replaceAll(' ', '+')}:wght@400;600;700&display=swap`
);

const isGoogleFont = (family: string) => GOOGLE_FONTS.includes(family);

export {
    DEFAULT_FONT,
    FONTS,
    getStylesheetUrl,
    isGoogleFont,
};
