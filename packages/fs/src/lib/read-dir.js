const fs = require('fs-extra');
const glob = require('glob');

const readDir = (path, { recursive } = {}) => {
  if (!fs.existsSync(path)) {
    return null;
  }
  if (recursive) {
    return glob.sync(`${path}/**/*.json`);
  }
  return glob.sync(`${path}/*.json`);
};

module.exports = {
  readDir,
};
