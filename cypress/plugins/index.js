const wp = require('@cypress/webpack-preprocessor');
const loadDocuments = require('../scripts/load-documents');

module.exports = (on) => {
  const options = {
    // eslint-disable-next-line global-require
    webpackOptions: require('../webpack.config.js'),
  };

  on('file:preprocessor', wp(options));
  on('task', {
    loadDocuments,
  });
};
