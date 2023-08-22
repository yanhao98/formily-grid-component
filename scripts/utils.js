const fs = require("fs-extra");
const path = require("path");

const dir = path.resolve(__dirname, "..", "dist");

function switchVersion(version) {
  if (!fs.existsSync(dir)) {
    return;
  }

  fs.emptyDirSync(`${dir}/cur`);
  fs.copySync(`${dir}/v${version}`, `${dir}/cur`);
}

function loadModule(name) {
  try {
    return require(name);
  } catch (e) {
    return undefined;
  }
}

module.exports.loadModule = loadModule;
module.exports.switchVersion = switchVersion;
