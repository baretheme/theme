import { getSite } from './get-site';
import { getDocumentVersionByLanguage } from '../lib/get-document-version-by-language';
import { getLanguageFromSlug } from '../lib/get-language-from-slug';
import { getDocumentBySlug } from '../lib/get-document-by-slug';

export function getDocumentVersionBySlug(slug) {
  console.log('GET DOCUMENT BY', slug);
  const site = getSite();
  console.log('SITE', site);
  const document = getDocumentBySlug(slug);
  const language = getLanguageFromSlug(slug) || site.defaultLanguage;
  const version = getDocumentVersionByLanguage(document, language);
  return version;
}
