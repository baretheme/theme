const { existsSync } = require('fs-extra');
const { join } = require('path');
const { DEFAULTS, CONFIG_PATH } = require('../constants');
const { writeJson } = require('../lib/write-json');

const setup = (options = {}) => {
  const root = options.root || process.cwd();
  const contentPath = join(root, options.content || DEFAULTS.content);
  const documentsPath = join(contentPath, options.documents || DEFAULTS.documents);
  const dataPath = join(contentPath, options.data || DEFAULTS.data);

  const defaults = {
    contentPath,
    documentsPath,
    dataPath,
  };

  if (!existsSync(contentPath)) {
    throw new Error('Ooops, you don\'t have any content folder.');
  }

  const config = { ...defaults, ...options };
  writeJson(CONFIG_PATH, config);
};

module.exports = {
  setup,
};
