import fs from 'fs-extra';
import glob from 'glob';

export const readDir = (path, { recursive } = {}) => {
  if (!fs.existsSync(path)) {
    return null;
  }
  if (recursive) {
    return glob.sync(`${path}/**/*.json`);
  }
  return glob.sync(`${path}/*.json`);
};
