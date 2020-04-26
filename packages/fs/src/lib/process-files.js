const { readDir } = require('./read-dir');

const processFiles = (path, fn) => {
  const fileNames = readDir(path, { recursive: true });
  return fileNames.map((fileName) => fn(fileName));
};

module.exports = {
  processFiles,
};
