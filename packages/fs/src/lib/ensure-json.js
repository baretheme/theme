const { extname } = require('path');

const ensureJson = (path) => {
  let jsonPath = path;
  const json = '.json';
  const ext = extname(path);

  if (ext === '') {
    jsonPath = `${path}${json}`;
  } else if (ext !== json) {
    jsonPath = jsonPath.replace(ext, json);
  }

  return jsonPath;
};

module.exports = {
  ensureJson,
};
