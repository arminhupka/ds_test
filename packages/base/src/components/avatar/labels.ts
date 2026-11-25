/**
 * The names of the labels the avatar reads aloud. A name that has no translation is shown as it is, so each one
 * reads as its English text until the application provides translations for it.
 */
const labels = {
    userActive: '{{name}}, active',
    userInactive: '{{name}}, inactive',
} as const;

export { labels };
