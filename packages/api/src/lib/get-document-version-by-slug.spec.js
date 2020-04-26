import { vol } from 'memfs';
import { createSite, createDocument, createVersion } from '@baretheme/test-utils';
import { getDocumentVersionBySlug } from './get-document-version-by-slug';

jest.mock('fs');

beforeEach(() => {
  vol.reset();
});

describe('getDocumentVersionBySlug', () => {
  it('should get the version of a standard document by slug', () => {
    const slug = 'blog';
    const config = {
      dataPath: '/content/data',
      documentsPath: '/content/documents',
    };
    const mockSite = createSite();
    const mockVersion = createVersion({ slug, language: mockSite.defaultLanguage });
    const mockDocument = createDocument({
      versions: [
        mockVersion,
      ],
    });

    vol.fromJSON({
      './data/site.json': JSON.stringify(mockSite),
      './documents/blog.json': JSON.stringify(mockDocument),
    }, '/content');

    const version = getDocumentVersionBySlug(config, slug);
    expect(version).toMatchObject(mockVersion);
  });

  it('should get the version of an index document regardless of the slug', () => {
    const slug = 'flop';
    const config = {
      dataPath: '/content/data',
      documentsPath: '/content/documents',
    };
    const mockSite = createSite();
    const mockVersion = createVersion({ slug, language: mockSite.defaultLanguage });
    const mockDocument = createDocument({
      versions: [
        mockVersion,
      ],
    });

    vol.fromJSON({
      './data/site.json': JSON.stringify(mockSite),
      './documents/index.json': JSON.stringify(mockDocument),
    }, '/content');

    const version = getDocumentVersionBySlug(config, '/');
    expect(version).toMatchObject(mockVersion);
  });

  it('should get the version of an index document from another language', () => {
    const slug = 'flop';
    const config = {
      dataPath: '/content/data',
      documentsPath: '/content/documents',
    };
    const mockSite = createSite({ defaultLanguage: 'en' });
    const mockVersion = createVersion({ slug, language: 'de' });
    const mockDocument = createDocument({
      versions: [
        mockVersion,
      ],
    });

    vol.fromJSON({
      './data/site.json': JSON.stringify(mockSite),
      './documents/index.json': JSON.stringify(mockDocument),
    }, '/content');

    const version = getDocumentVersionBySlug(config, '/de');
    expect(version).toMatchObject(mockVersion);
  });
});
