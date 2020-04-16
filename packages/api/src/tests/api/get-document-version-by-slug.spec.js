import { readSite, readDocument } from '@baretheme/fs';
import { getDocumentVersionBySlug } from '../../api/get-document-version-by-slug';
import { createSite } from '../fixtures/site';
import { createDocument } from '../fixtures/document';

let mockDocuments;
const defaultLanguage = 'en';
const mockSite = createSite({ defaultLanguage });

jest.mock('@baretheme/fs', () => ({
  readSite: jest.fn(),
  readDocument: jest.fn(),
}));

beforeEach(() => {
  mockDocuments = [
    createDocument({ __fileName: 'index' }),
    createDocument({ __fileName: 'blog' }),
    createDocument({ __fileName: 'blog/my-article' }),
  ];
  readSite.mockReturnValue(mockSite);
  readDocument.mockImplementation((name) => mockDocuments.find((d) => d.__fileName === name));
});

describe('getDocumentVersionBySlug', () => {
  it('returns the index document for "/"', () => {
    const documentVersion = getDocumentVersionBySlug('/');
    expect(documentVersion.title).toEqual(mockDocuments[0].versions.find((v) => v.language === defaultLanguage).title);
  });

  it('returns the matching version for the language', () => {
    const documentVersion = getDocumentVersionBySlug('/de');
    expect(documentVersion.title).toEqual(mockDocuments[0].versions.find((v) => v.language === 'de').title);
  });
});
