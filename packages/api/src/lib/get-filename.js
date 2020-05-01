import { removeFromFilename } from '@baretheme/fs';

const getFilename = (language, slug) => removeFromFilename(slug, language) || 'index';

export { getFilename };
