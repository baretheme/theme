const { join } = require('path');
const fs = require('fs-extra');
const { CONFIG } = require('./constants');

const assignDefaults = ({ root, config = {} }) => {
  const defaults = {
    documentsPath: join(root, 'content', 'documents'),
    dataPath: join(root, 'content', 'data'),
    assetsPath: join(root, 'content', 'assets'),
  };

  return {
    ...defaults,
    ...config,
  };
};

const getConfig = () => {
  const root = process.cwd();
  const configPath = CONFIG;
  if (fs.existsSync(configPath)) {
    // eslint-disable-next-line
    const config = require(configPath);
    return assignDefaults({ root, config });
  }

  return assignDefaults({ root });
};

module.exports = {
  getConfig,
};
