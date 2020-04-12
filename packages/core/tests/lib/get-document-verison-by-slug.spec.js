import { readSite, readDocument } from '@baretheme/fs';
import { getDocumentVersionBySlug } from '../../api';
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
  readSite.mockResolvedValue(mockSite);
  readDocument.mockImplementation(async (name) => mockDocuments.find((d) => d.__fileName === name));
});

describe('getDocumentVersionBySlug', () => {
  it('returns the index document for "/"', async () => {
    const documentVersion = await getDocumentVersionBySlug('/');
    expect(documentVersion.title).toEqual(mockDocuments[0].versions.find((v) => v.language === defaultLanguage).title);
  });

  it('returns the matching version for the language', async () => {
    const documentVersion = await getDocumentVersionBySlug('/de');
    expect(documentVersion.title).toEqual(mockDocuments[0].versions.find((v) => v.language === 'de').title);
  });
});
