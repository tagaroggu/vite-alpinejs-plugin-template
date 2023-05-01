import { resolve } from "node:path";
import { defineConfig } from "vite";

import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            name: 'AlpinePlugin',
            fileName: 'alpine-plugin',
            formats: ['es']
        },
        rollupOptions: {
            external: ['alpinejs']
        }
    },
    plugins: [false && dts()]
});