const { existsSync, readFileSync } = require('fs-extra');
const { ensureJson } = require('./ensure-json');

const readJson = (path) => {
  const jsonPath = ensureJson(path);

  if (!existsSync(jsonPath)) {
    return null;
  }

  const content = readFileSync(jsonPath, 'utf8');
  const json = JSON.parse(content);
  const file = {
    ...json,
  };
  return file;
};

module.exports = {
  readJson,
};
