import { join } from 'path';
import fs from 'fs-extra';
import _eval from 'eval';
import { CUSTOM_CONFIG } from './constants';

const assignDefaults = (root, config = {}) => {
  const defaults = {
    documentsPath: join(root, 'content', 'documents'),
    dataPath: join(root, 'content', 'data'),
    assetsPath: join(root, 'content', 'assets'),
  };

  return {
    ...defaults,
    ...config,
  };
};

export const getConfig = () => {
  const root = process.cwd();
  const configPath = CUSTOM_CONFIG;

  if (fs.existsSync(configPath)) {
    const config = _eval(fs.readFileSync(configPath, 'utf-8'));
    return assignDefaults(root, config);
  }

  return assignDefaults(root);
};
