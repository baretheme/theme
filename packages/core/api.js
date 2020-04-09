import { getSite } from './lib/get-site';
import { getDocumentVersionByLanguage } from './lib/get-document-version-by-language';
import { getLanguageFromSlug } from './lib/get-language-from-slug';
import { getDocumentBySlug } from './lib/get-document-by-slug';

export async function getDocumentVersionBySlug(slug) {
  const site = await getSite();
  const document = await getDocumentBySlug(slug);
  const language = getLanguageFromSlug(slug) || site.defaultLanguage;
  const version = getDocumentVersionByLanguage(document, language);
  return version;
}

// export async function getDocumentBySlug(slug = '/') {
//   const site = await readSite();
//   let language = site.defaultLanguage;
//   let path = 'index';

//   if (slug !== '/') {
//     const languageFromSlug = getLanguageFromSlug(slug);

//     if (languageFromSlug) {
//       language = languageFromSlug.name;
//       path = slug.replace(languageFromSlug.path, '');
//     } else {
//       path = slug;
//     }
//   }

//   const document = await readDocumentByFileName(path);
//   const version = await getVersion(document, language);
//   return version;
// }
