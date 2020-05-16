import fs from 'fs-extra';
import glob from 'glob';

export const readDir = (path: string, { recursive = false } = {}): string[] => {
  if (!fs.existsSync(path)) {
    return [];
  }
  if (recursive) {
    return glob.sync(`${path}/**/*.json`);
  }
  return glob.sync(`${path}/*.json`);
};
