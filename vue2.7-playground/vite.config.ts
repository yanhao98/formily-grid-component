import vue2 from "@vitejs/plugin-vue2";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { buildOptions, dtsOptions } from "../vite.config.base";

buildOptions.outDir = path.resolve(__dirname, "./dist");

export default defineConfig({
  plugins: [vue2(), dts(dtsOptions)],
  resolve: {
    alias: {
      vue: path.resolve(__dirname, "./node_modules/vue/dist/vue.runtime.esm.js"),
      "vue-demi": path.resolve(__dirname, "../node_modules/vue-demi/lib/v2.7/index.mjs"),
    },
  },
  build: buildOptions,
});
