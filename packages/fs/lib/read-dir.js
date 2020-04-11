import fs from 'fs';

export function readDir(path) {
  if (!fs.existsSync(path)) {
    return null;
  }
  return fs.readdirSync(path);
}
