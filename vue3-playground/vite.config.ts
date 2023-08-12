import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { buildOptions, dtsOptions } from '../vite.config.base';

buildOptions.outDir = path.resolve(__dirname, './dist');

export default defineConfig({
  plugins: [vue(), dts(dtsOptions)],
  build: buildOptions,
});
