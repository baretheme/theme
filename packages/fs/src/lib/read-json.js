const fs = require('fs-extra');
const { ensureJson } = require('./ensure-json');

const readJson = (path) => {
  const jsonPath = ensureJson(path);

  if (!fs.existsSync(jsonPath)) {
    return null;
  }

  const content = fs.readFileSync(jsonPath, 'utf8');
  return JSON.parse(content);
};

module.exports = {
  readJson,
};
