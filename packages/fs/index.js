import { join } from 'path';
import { readJson } from './lib/read-json';
import { readAllJson } from './lib/read-all-json';

let config = {};

export const defaults = {
  documentsPath: join(process.cwd(), 'content', 'documents'),
  dataPath: join(process.cwd(), 'content', 'data'),
};

export const setup = (options) => {
  config = { ...defaults, ...options };
};

export const getConfig = () => config;
export const readSite = () => readJson(join(config.dataPath, 'site'));
export const readNavigation = () => readJson(join(config.dataPath, 'navigation'));
export const readAllDocuments = () => readAllJson(config.documentsPath);
export const readDocument = (name) => readJson(join(config.documentsPath, name));
