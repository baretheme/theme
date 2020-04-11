import fs from 'fs';
import { ensureJson } from './ensure-json';

export function readJson(path) {
  if (!fs.existsSync(path)) {
    return null;
  }

  const jsonPath = ensureJson(path);
  const content = fs.readFileSync(jsonPath, 'utf8');

  try {
    return JSON.parse(content);
  } catch {
    throw new Error('[BARETHEME] File must be valid json.');
  }
}
