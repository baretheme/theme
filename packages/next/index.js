const { resolve, join } = require('path');
const fs = require('fs-extra');
const { TMP, CONFIG } = require('./constants');

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
  const config = fs.readJsonSync(resolve(process.cwd(), TMP, CONFIG));
  return assignDefaults({ root: process.env.BARETHEME_ROOT, config });
};

module.exports = {
  getConfig,
};
