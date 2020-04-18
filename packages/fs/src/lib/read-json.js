const { existsSync, readFileSync } = require('fs-extra');
const { basename } = require('path');
const { ensureJson } = require('./ensure-json');

const readJson = (path) => {
  const jsonPath = ensureJson(path);

  if (!existsSync(jsonPath)) {
    return null;
  }

  const content = readFileSync(jsonPath, 'utf8');
  const json = JSON.parse(content);
  const filename = basename(jsonPath, '.json');
  const file = {
    filename,
    ...json,
  };
  return file;
};

module.exports = {
  readJson,
};
