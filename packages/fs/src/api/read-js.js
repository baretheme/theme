const { readFileSync } = require('fs-extra');

const readJS = (path) => {
  const content = readFileSync(path, 'utf-8');
  const Module = module.constructor;
  const m = new Module();
  m._compile(content);
  return m.exports;
};

module.exports = { readJS };
