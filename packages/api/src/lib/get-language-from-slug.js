import { stripSlashes } from './strip-slashes';

export function getLanguageFromSlug(slug) {
  if (!slug) return null;

  const langRegEx = /(^\/?[a-z]{2}\/)|(^\/?[a-z]{2}$)/i;
  const match = slug.match(langRegEx);

  if (!match) {
    return null;
  }

  const hit = match[0];

  return stripSlashes(hit);
}
