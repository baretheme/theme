const { existsSync } = require('fs-extra');
const { join } = require('path');
const { CONFIG_PATH, DEFAULTS } = require('../constants');
const { writeJson } = require('../lib/write-json');

const setup = (options) => {
  const home = options.home || process.cwd();

  if (!existsSync(join(home, 'content'))) {
    console.log('Ooops, you don\'t have any content folder.');
    return;
  }

  const config = { ...DEFAULTS, ...options };
  writeJson(CONFIG_PATH, config);
};

module.exports = {
  setup,
};
