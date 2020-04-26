import { removeFromFilename } from '@baretheme/fs';
import { getSite } from './get-site';
import { getAllDocuments } from './get-all-documents';
import { getAllVersions } from './get-all-versions';
import { getVersionURLs } from './get-version-urls';

const getAllURLs = (config, { publicOnly } = {}) => {
  const site = getSite(config.dataPath);
  const documents = getAllDocuments(config.documentsPath, { publicOnly });
  const versions = getAllVersions(documents);
  const urls = getVersionURLs(versions).map((url) => removeFromFilename(url, site.defaultLanguage));

  return urls;
};

export { getAllURLs };
