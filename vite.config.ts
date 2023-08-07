import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import dts from 'vite-plugin-dts';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(),
    dts({
      entryRoot: 'src',
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^@\/(.+)/,
        replacement: path.resolve(path.resolve(__dirname), 'src') + '/$1',
      },
    ],
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'VComponent',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue-demi', 'vue'],
      output: {
        globals: {
          vue: 'Vue',
          'vue-demi': 'VueDemi',
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
});
