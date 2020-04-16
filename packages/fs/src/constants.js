const { join } = require('path');

module.exports = {
  CONFIG_PATH: join(__dirname, '.tmp/config.json'),
  DEFAULTS: {
    documentsPath: join(process.cwd(), 'content', 'documents'),
    dataPath: join(process.cwd(), 'content', 'data'),
  },
};
