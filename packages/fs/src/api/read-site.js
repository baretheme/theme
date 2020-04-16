const { join } = require('path');
const { readJson } = require('../lib/read-json');
const { getConfig } = require('./get-config');

const readSite = () => {
  const config = getConfig();
  const path = join(config.dataPath, 'site');
  const site = readJson(path);
  return site;
};

module.exports = {
  readSite,
};
