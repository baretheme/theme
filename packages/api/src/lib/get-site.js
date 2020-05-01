import path from 'path';
import { readJson } from '@baretheme/fs';

const getSite = (dataPath) => {
  const sitePath = path.join(dataPath, 'site');
  return readJson(sitePath);
};

export { getSite };
