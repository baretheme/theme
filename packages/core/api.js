import { readSite, readDocumentByFileName } from '@baretheme/fs';
import { getLanguageFromSlug } from './utils/get-language-from-slug';
import { getVersion } from './utils/get-version';

export async function getDocumentBySlug(slug = '/') {
  const site = await readSite();
  console.log(site);
  let language = site.defaultLanguage;
  let path = 'index';

  if (slug !== '/') {
    const languageFromSlug = getLanguageFromSlug(slug);

    if (languageFromSlug) {
      language = languageFromSlug.name;
      path = slug.replace(languageFromSlug.path, '');
    } else {
      path = slug;
    }
  }

  const document = await readDocumentByFileName(path);
  console.log(document);
  const version = await getVersion(document, language);
  return version;
}
