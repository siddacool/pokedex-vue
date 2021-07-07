import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/pokedex-vue/',
  resolve: {
    alias: {
      constants: path.resolve(__dirname, '/src/constants'),
      assets: path.resolve(__dirname, '/src/assets'),
      router: path.resolve(__dirname, '/src/router'),
      api: path.resolve(__dirname, '/src/api'),
      store: path.resolve(__dirname, '/src/store'),
      components: path.resolve(__dirname, '/src/components'),
      pages: path.resolve(__dirname, '/src/pages'),
    },
  },
});
