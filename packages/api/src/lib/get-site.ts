import path from 'path';
import { readJson } from '@baretheme/fs';
import { Site } from '../interfaces';

const getSite = (dataPath: string): Site => {
  const sitePath = path.join(dataPath, 'site');
  return readJson(sitePath);
};

export { getSite };
