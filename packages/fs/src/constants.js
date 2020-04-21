const { join } = require('path');

module.exports = {
  CONFIG_PATH: join(__dirname, '.tmp/config.json'),
  DEFAULTS: {
    content: 'content',
    documents: 'documents',
    data: 'data',
  },
};
