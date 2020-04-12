const { join } = require('path');
const { readJson } = require('../lib/read-json');
const { getConfig } = require('./get-config');

const readSite = () => {
  const config = getConfig();
  return readJson(join(config.dataPath, 'site'));
};

module.exports = {
  readSite,
};
