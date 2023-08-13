import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { buildOptions, dtsOptions } from "../vite.config.base";

buildOptions.outDir = path.resolve(__dirname, "./dist");

export default defineConfig({
  plugins: [vue(), dts(dtsOptions)],
  resolve: {
    alias:
      process.env.NODE_ENV === "production"
        ? {}
        : {
            vue: path.resolve(__dirname, "./node_modules/vue/dist/vue.runtime.esm-browser.js"),
            "vue-demi": path.resolve(__dirname, "../node_modules/vue-demi/lib/v3/index.mjs"),
          },
  },
  build: buildOptions,
});
