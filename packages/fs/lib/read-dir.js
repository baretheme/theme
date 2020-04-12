const fs = require('fs');

const readDir = (path) => {
  if (!fs.existsSync(path)) {
    return null;
  }
  return fs.readdirSync(path);
};

module.exports = {
  readDir,
};
