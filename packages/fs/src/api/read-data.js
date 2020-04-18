const { groupBy } = require('lodash');
const { readAllJson } = require('../lib/read-all-json');
const { getConfig } = require('./get-config');

const readData = () => {
  const config = getConfig();
  const data = readAllJson(config.dataPath);
  return groupBy(data, 'filename');
};

module.exports = {
  readData,
};
