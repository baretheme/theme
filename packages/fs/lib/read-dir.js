const fs = require('fs-extra');

const readDir = (path) => {
  if (!fs.existsSync(path)) {
    return null;
  }
  return fs.readdirSync(path);
};

module.exports = {
  readDir,
};
