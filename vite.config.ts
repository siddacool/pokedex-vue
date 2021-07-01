import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, '/src/assets'),
      router: path.resolve(__dirname, '/src/router'),
      components: path.resolve(__dirname, '/src/components'),
      pages: path.resolve(__dirname, '/src/pages'),
    },
  },
});