import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@components' : path.resolve(__dirname, './components'),
            '@api' : path.resolve(__dirname, './api'),
            '@hooks' : path.resolve(__dirname, './hooks'),
        }
    }
})