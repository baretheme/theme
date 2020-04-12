const { CONFIG_PATH, DEFAULTS } = require('../constants');
const { writeJson } = require('../lib/write-json');

const setup = (options) => {
  const config = { ...DEFAULTS, ...options };
  writeJson(CONFIG_PATH, config);
};

module.exports = {
  setup,
};
