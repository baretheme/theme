import { getSite } from './get-site';
import { getDocumentBySlug } from '../lib/get-document-by-slug';
import { getLanguageFromSlug } from '../lib/get-language-from-slug';
import { getDocumentVersionByLanguage } from '../lib/get-document-version-by-language';

export function getDocumentVersionBySlug(slug) {
  const site = getSite();
  const document = getDocumentBySlug(slug);
  const language = getLanguageFromSlug(slug) || site.defaultLanguage;
  const version = getDocumentVersionByLanguage(document, language);
  return version;
}
