import path from "path";

const srcPath = path.resolve(__dirname, "./src");

// https://github.com/qmhc/vite-plugin-dts/blob/HEAD/README.zh-CN.md
export const dtsOptions: import("vite-plugin-dts").PluginOptions = {
  root: srcPath,
  include: ["./index.ts"],
  tsconfigPath: path.resolve(srcPath, "../tsconfig.json"),
  entryRoot: srcPath,
  compilerOptions: {
    baseUrl: path.resolve(srcPath, "../"),
    paths: {},
  },
  // insertTypesEntry: true,
  // rollupTypes: true,
  staticImport: true,
  logLevel: "info",
  beforeWriteFile(filePath, content) {
    return {
      filePath,
      content: content
        .replaceAll("vue2.7", "vue")
        .replaceAll("vue2", "vue")
        .replaceAll("vue3", "vue")
        .replaceAll("../node_modules/", ""),
    };
  },
};

export const buildOptions: import("vite").BuildOptions = {
  lib: {
    entry: `${srcPath}/index.ts`,
    name: "v-component",
    formats: ["es", "cjs"],
    fileName: "index",
    // fileName: (format) => `index.${format}.js`,
  },
  rollupOptions: {
    external: ["vue-demi", "vue", "@formily/grid", "@formily/reactive-vue"],
    output: {
      globals: {
        vue: "Vue",
        "vue-demi": "VueDemi",
      },
    },
  },
};
