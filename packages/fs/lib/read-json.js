const fs = require('fs');
const { ensureJson } = require('./ensure-json');

const readJson = (path) => {
  if (!fs.existsSync(path)) {
    return null;
  }

  const jsonPath = ensureJson(path);
  const content = fs.readFileSync(jsonPath, 'utf8');

  try {
    return JSON.parse(content);
  } catch {
    throw new Error('[BARETHEME] File must be valid json.');
  }
};

module.exports = {
  readJson,
};
