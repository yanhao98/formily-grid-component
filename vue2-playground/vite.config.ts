import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { createVuePlugin } from 'vite-plugin-vue2';
import { buildOptions, dtsOptions } from '../vite.config.base';

buildOptions.outDir = path.resolve(__dirname, './dist');

export default defineConfig({
  plugins: [createVuePlugin(), dts(dtsOptions)],
  build: buildOptions,
});
