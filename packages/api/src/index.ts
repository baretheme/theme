import { relativeVersionURLs } from './lib/relative-version-urls';
import { getAllDocuments } from './lib/get-all-documents';
import { getAllVersions } from './lib/get-all-versions';
import { documentVersionsByURL } from './lib/document-versions-by-url';
import { DocumentVersion } from './interfaces';

export const documentVersionsByRelativeURL = (versions: DocumentVersion[], dir: string) => {
  const byURL = documentVersionsByURL(versions);
  const byRelativeURL = relativeVersionURLs(byURL, dir);
  return byRelativeURL;
};

export const getAllDocumentVersions = ({ path, dir = '/', publicOnly = false }: { path: string, dir?: string, publicOnly?: boolean }) => {
  let documents = getAllDocuments(path);

  if (publicOnly) {
    documents = documents.filter((d) => !d.draft);
  }

  let versions = getAllVersions(documents);

  if (publicOnly) {
    versions = versions.filter((v) => !v.draft);
  }

  return documentVersionsByRelativeURL(versions, dir);
};

export const getDocumentVersion = ({
  path, url, publicOnly = false,
}: { path: string, url: string, publicOnly?: boolean }) => {
  // Probably it's better to find a direct way to get a single document.
  // Although it's a little more complex, because the actual url is defined by versions
  // inside of each document, not only by its path.
  const versions = getAllDocumentVersions({
    path,
    publicOnly,
  });

  return versions[url];
};

export * from './interfaces';
export * from './lib/get-site';
