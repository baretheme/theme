import { join } from 'path';
import { readDir } from './read-dir';
import { readJson } from './read-json';

export const readAllJson = (path) => {
  const fileNames = readDir(path);
  return fileNames.map((fileName) => readJson(join(path, fileName)));
};
