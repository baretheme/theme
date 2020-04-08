import fs from 'fs';

export function readFile(path) {
  if (!fs.existsSync(path)) {
    return Promise.reject(path);
  }
  const content = fs.readFileSync(path, 'utf8');
  if (!content) return null;
  return JSON.parse(content);
}

export function readDir(path) {
  if (!fs.existsSync(path)) {
    return Promise.reject(path);
  }
  return Promise.resolve(fs.readdirSync(path));
}
