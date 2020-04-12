import { readDocument } from '@baretheme/fs';

export async function getDocumentByPath(slug = '/') {
  const path = slug === '/' ? 'index' : slug;

  if (!slug) return null;

  return readDocument(path);
}
