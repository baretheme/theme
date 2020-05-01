import path from 'path';
import { getSite } from './get-site';
import { getDocument } from './get-document';
import { getLanguageFromPath } from './get-language-from-path';
import { getFilename } from './get-filename';

const getDocumentVersionBySlug = (config, slug) => {
  const { defaultLanguage, languages } = getSite(config.dataPath);
  const currentLanguage = getLanguageFromPath(languages, defaultLanguage, slug)?.code;
  const filename = getFilename(currentLanguage, slug);
  const isIndex = filename === 'index';
  const documentPath = path.join(config.documentsPath, filename);
  const document = getDocument(documentPath);
  const version = document.versions.find((v) => {
    if (!isIndex) {
      const basename = path.basename(filename);
      return v.language === currentLanguage && v.slug === basename;
    }
    return v.language === currentLanguage;
  });
  return version;
};

export { getDocumentVersionBySlug };
