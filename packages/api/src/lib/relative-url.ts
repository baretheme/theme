import { removeFromFilename } from '@baretheme/fs';

export const relativeURL = (url: string, dir: string) => removeFromFilename(url, dir) || 'index';
