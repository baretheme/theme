import { getSite } from './get-site';
import { getDocumentVersionByLanguage } from './get-document-version-by-language';
import { getLanguageFromSlug } from './get-language-from-slug';
import { getDocumentBySlug } from './get-document-by-slug';

export async function getDocumentVersionBySlug(slug) {
  const site = await getSite();
  const document = await getDocumentBySlug(slug);
  const language = getLanguageFromSlug(slug) || site.defaultLanguage;
  const version = getDocumentVersionByLanguage(document, language);
  return version;
}
