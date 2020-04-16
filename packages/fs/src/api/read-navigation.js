const { join } = require('path');
const { readJson } = require('../lib/read-json');
const { getConfig } = require('./get-config');

const readNavigation = () => {
  const config = getConfig();
  return readJson(join(config.dataPath, 'navigation'));
};

module.exports = {
  readNavigation,
};
