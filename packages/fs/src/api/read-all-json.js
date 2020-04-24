const { readDir } = require('../lib/read-dir');
const { readJson } = require('./read-json');

const readAllJson = (path) => {
  const fileNames = readDir(path, { recursive: true });
  return fileNames.map((fileName) => readJson(fileName));
};

module.exports = {
  readAllJson,
};
