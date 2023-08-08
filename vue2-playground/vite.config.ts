import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { createVuePlugin } from 'vite-plugin-vue2';
import path from 'path';
const srcPath = path.resolve(__dirname, '../src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(),
    // https://github.com/qmhc/vite-plugin-dts/blob/HEAD/README.zh-CN.md
    dts({
      root: srcPath,
      include: ['./index.ts'],
      tsconfigPath: path.resolve(srcPath, '../tsconfig.json'),
      entryRoot: srcPath,
      compilerOptions: {
        paths: {
          '@vue/composition-api': ['node_modules/@vue/composition-api'],
          'vue': ['node_modules/vue'],
        },
      },
      // insertTypesEntry: true,
      // rollupTypes: true,
      staticImport: true,
      logLevel: 'info',
      beforeWriteFile(filePath, content) {
        return {
          filePath,
          content: content
            .replaceAll('vue2', 'vue')
            .replaceAll('../node_modules/', ''),
        };
      },
    }),
  ],
  build: {
    outDir: path.resolve(__dirname, './dist'),
    lib: {
      entry: `${srcPath}/index.ts`,
      name: 'v-component',
      formats: ['es', 'cjs'],
      fileName: 'index',
      // fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['vue-demi', 'vue', '@formily/grid', '@formily/reactive-vue'],
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
