const fs = require('fs-extra');

const writeJson = (path, file) => fs.outputJsonSync(path, file);

module.exports = {
  writeJson,
};
