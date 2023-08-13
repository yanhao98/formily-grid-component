import { execSync } from "node:child_process";
import fs from "fs-extra";

function cleanNodeModules() {
  fs.removeSync("node_modules");
  fs.removeSync("pnpm-lock.yaml");
  ["vue2-playground", "vue2.7-playground", "vue3-playground"].forEach((dir) => {
    fs.removeSync(`${dir}/node_modules`);
  });
}

cleanNodeModules();

execSync("pnpm i", { stdio: "inherit" });
