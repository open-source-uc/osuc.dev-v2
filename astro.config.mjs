// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { remarkMermaid } from './src/lib/remarkMermaid.js';

// https://astro.build/config
export default defineConfig({
    site: 'https://osuc.dev',

    vite: {
        plugins: [tailwindcss()]
    },

    markdown: {
        remarkPlugins: [
            remarkMermaid
        ]
    }
});