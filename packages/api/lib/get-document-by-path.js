import { readDocument } from '@baretheme/fs';

export function getDocumentByPath(slug = '/') {
  const path = slug === '/' ? 'index' : slug;

  if (!slug) return null;

  return readDocument(path);
}
