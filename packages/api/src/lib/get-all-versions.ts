import { DocumentVersion, Document } from '../interfaces';

export const getAllVersions = (
  documents: Document[],
): DocumentVersion[] => documents.reduce((acc: DocumentVersion[], item: Document) => {
  const { versions } = item;

  return [
    ...acc,
    ...versions,
  ];
}, []);
