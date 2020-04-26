import { processFiles } from '@baretheme/fs';
import { getDocument } from './get-document';

const getAllDocuments = (path, { publicOnly } = {}) => {
  let documents = processFiles(path, getDocument);

  if (publicOnly) {
    documents = documents.filter((d) => !d.draft);
  }

  return documents;
};

export { getAllDocuments };
