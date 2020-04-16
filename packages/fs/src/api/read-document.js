const { join } = require('path');
const { readJson } = require('../lib/read-json');
const { getConfig } = require('./get-config');

const readDocument = (name) => {
  const config = getConfig();
  return readJson(join(config.documentsPath, name));
};

module.exports = {
  readDocument,
};
