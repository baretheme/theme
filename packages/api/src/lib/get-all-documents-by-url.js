import { removeFromFilename } from '@baretheme/fs';
import { getSite } from './get-site';
import { getAllDocuments } from './get-all-documents';
import { getAllVersions } from './get-all-versions';

const getAllDocumentsByURL = (config, { publicOnly } = {}) => {
  const site = getSite(config.dataPath);
  const documents = getAllDocuments(config.documentsPath, { publicOnly });
  const versions = getAllVersions(documents, { publicOnly });
  const slugs = versions.reduce((acc, version) => {
    const url = removeFromFilename(version.$url, site.defaultLanguage) || 'index';
    return {
      ...acc,
      [url]: version,
    };
  }, {});

  return slugs;
};

export { getAllDocumentsByURL };
