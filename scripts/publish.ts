import fs from "fs";
import { execSync } from "node:child_process";
import path from "node:path";
import { version } from "../package.json";

execSync("npm run build", { stdio: "inherit" });

["2", "2.7", "3"].forEach((version) => {
  fs.cpSync(
    path.resolve(__dirname, "..", `vue${version}-playground/dist`),
    path.resolve(__dirname, "..", `dist/v${version}`),
    { recursive: true }
  );
});

let command = "npm publish --access public";

if (version.includes("beta")) {
  command += " --tag beta";
}

// command += ' --dry-run';

execSync(command, { stdio: "inherit" });
