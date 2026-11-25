import { addons } from 'storybook/manager-api';
import { create, getPreferredColorScheme } from 'storybook/theming';
import { registerTypographyTool } from './font/TypographyTool.tsx';

const getBrandTitle = () => {
    const name = process.env.PKG_NAME || 'Storybook';
    const version = process.env.PKG_VERSION;
    const ref = process.env.CI_COMMIT_REF_NAME;

    if (ref) {
        return `${name} (${ref})`;
    }
    if (version) {
        return `${name} (${version === '0.0.0' ? 'local' : version})`;
    }

    return name;
};

// Titles the Storybook UI with the package it shows and the version or branch it was built from.
addons.setConfig({
    theme: create({
        base: getPreferredColorScheme(),
        brandTitle: getBrandTitle(),
    }),
});

registerTypographyTool();
