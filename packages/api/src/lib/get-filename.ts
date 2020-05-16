import { removeFromFilename } from '@baretheme/fs';

const getFilename = (language:string, slug: string): string => removeFromFilename(slug, language) || 'index';

export { getFilename };
