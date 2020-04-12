const { getConfig } = require('./api/get-config');
const { setup } = require('./api/setup');
const { readSite } = require('./api/read-site');
const { readNavigation } = require('./api/read-navigation');
const { readAllDocuments } = require('./api/read-all-documents');
const { readDocument } = require('./api/read-document');

module.exports = {
  getConfig,
  setup,
  readSite,
  readNavigation,
  readAllDocuments,
  readDocument,
};
