import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Storybook's own Vite config: the packages' dev setup, without their library build.
export default defineConfig({
    resolve: {
        tsconfigPaths: true,
    },
    css: {
        modules: {
            generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
    },
    plugins: [react()],
});
