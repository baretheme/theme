const { join } = require('path');
const { readDir } = require('./read-dir');
const { readJson } = require('./read-json');

const readAllJson = (path) => {
  const fileNames = readDir(path);
  return fileNames.map((fileName) => readJson(join(path, fileName)));
};

module.exports = {
  readAllJson,
};
