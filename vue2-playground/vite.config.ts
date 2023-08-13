import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { createVuePlugin } from "vite-plugin-vue2";
import { buildOptions, dtsOptions } from "../vite.config.base";

buildOptions.outDir = path.resolve(__dirname, "dist");

dtsOptions!.compilerOptions!.paths!["@vue/composition-api"] = ["node_modules/@vue/composition-api"];
dtsOptions!.compilerOptions!.paths!["vue"] = ["node_modules/vue2"];

export default defineConfig({
  plugins: [createVuePlugin(), dts(dtsOptions)],
  resolve: {
    alias: {
      vue: path.resolve(__dirname, "./node_modules/vue/dist/vue.runtime.esm.js"),
      "vue-demi": path.resolve(__dirname, "../node_modules/vue-demi/lib/v2/index.mjs"),
    },
  },
  build: buildOptions,
});
