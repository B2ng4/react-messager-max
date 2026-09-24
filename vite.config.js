import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@components' : path.resolve(import.meta.dirname, './components'),
            '@api' : path.resolve(import.meta.dirname, './api'),
            '@hooks' : path.resolve(import.meta.dirname, './hooks'),
        }
    }
})