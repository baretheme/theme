import path from 'path';
import { readJson } from '@baretheme/fs';

const getSite = (dataPath) => readJson(path.join(dataPath, 'site'));

export { getSite };
