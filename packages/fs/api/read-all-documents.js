const { readAllJson } = require('../lib/read-all-json');
const { getConfig } = require('./get-config');

const readAllDocuments = () => {
  const config = getConfig();
  return readAllJson(config.documentsPath);
};

module.exports = {
  readAllDocuments,
};
