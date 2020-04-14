import { getDocumentByPath } from './get-document-by-path';
import { stripLanguageFromSlug } from './strip-language-from-slug';

export function getDocumentBySlug(slug) {
  const path = stripLanguageFromSlug(slug);
  return getDocumentByPath(path);
}
