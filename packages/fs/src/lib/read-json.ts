import { existsSync, readFileSync } from 'fs';
import { ensureJson } from './ensure-json';

export const readJson = (path: string) => {
  const jsonPath = ensureJson(path);

  if (!existsSync(jsonPath)) {
    return null;
  }

  const content = readFileSync(jsonPath, 'utf8');
  const json = JSON.parse(content);
  const file = {
    ...json,
  };
  return file;
};
