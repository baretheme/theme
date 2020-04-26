import path from 'path';
import { removeFromFilename } from '@baretheme/fs';
import { getSite } from './get-site';
import { getDocument } from './get-document';
import { getLanguageFromPath } from './get-language-from-path';

const getDocumentVersionBySlug = (config, slug) => {
  const { defaultLanguage, languages } = getSite(config.dataPath);
  const currentLanguage = getLanguageFromPath(languages, defaultLanguage, slug);
  const filename = removeFromFilename(slug, currentLanguage.code) || 'index';
  const documentPath = path.join(config.documentsPath, filename);
  console.log(documentPath, filename, currentLanguage);
  const document = getDocument(documentPath);
  const version = document.versions.find((v) => {
    if (filename !== 'index') {
      return v.language === currentLanguage.code && v.slug === filename;
    }
    return v.language === currentLanguage.code;
  });
  return version;
};

export { getDocumentVersionBySlug };
