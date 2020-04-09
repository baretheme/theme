import { getLanguageFromSlug } from './get-language-from-slug';
import { stripMultipleSlashes } from './strip-multiple-slashes';

export function stripLanguageFromSlug(slug) {
  if (!slug) return '';
  const languageFromSlug = getLanguageFromSlug(slug);
  return stripMultipleSlashes(slug.replace(languageFromSlug, ''));
}
