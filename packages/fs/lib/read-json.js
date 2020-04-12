const fs = require('fs-extra');
const { ensureJson } = require('./ensure-json');

const readJson = (path) => {
  if (!fs.existsSync(path)) {
    return null;
  }

  const jsonPath = ensureJson(path);
  const content = fs.readFileSync(jsonPath, 'utf8');

  return JSON.parse(content);
};

module.exports = {
  readJson,
};
