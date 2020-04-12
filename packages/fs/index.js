const { join } = require('path');
const { readJson } = require('./lib/read-json');
const { readAllJson } = require('./lib/read-all-json');

let config = {};

const defaults = {
  documentsPath: join(process.cwd(), 'content', 'documents'),
  dataPath: join(process.cwd(), 'content', 'data'),
};

const setup = (options) => {
  config = { ...defaults, ...options };
};

const getConfig = () => config;
const readSite = () => readJson(join(config.dataPath, 'site'));
const readNavigation = () => readJson(join(config.dataPath, 'navigation'));
const readAllDocuments = () => readAllJson(config.documentsPath);
const readDocument = (name) => readJson(join(config.documentsPath, name));

module.exports = {
  defaults,
  getConfig,
  setup,
  readSite,
  readNavigation,
  readAllDocuments,
  readDocument,
};
