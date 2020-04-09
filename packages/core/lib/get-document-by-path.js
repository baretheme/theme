import { readDocumentByFilePath } from '@baretheme/fs';

export async function getDocumentByPath(slug = '/') {
  const path = slug === '/' ? 'index' : slug;

  if (!slug) return null;

  return readDocumentByFilePath(path);
}
