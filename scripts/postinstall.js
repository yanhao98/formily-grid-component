const { switchVersion, loadModule } = require('./utils.js');

const Vue = loadModule('vue');

if (!Vue || typeof Vue.version !== 'string') {
  process.exit();
} else if (Vue.version.startsWith('2.7.')) {
  switchVersion(2.7);
} else if (Vue.version.startsWith('2.')) {
  switchVersion(2);
} else if (Vue.version.startsWith('3.')) {
  switchVersion(3);
}
