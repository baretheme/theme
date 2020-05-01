import { readDir } from './read-dir';

export const processFiles = (path, fn) => {
  const fileNames = readDir(path, { recursive: true });
  return fileNames.map((fileName) => fn(fileName));
};
