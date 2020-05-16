import { vol } from 'memfs';
import { createDocument } from '@baretheme/test-utils';
import { getDocument } from './get-document';

// eslint-disable-next-line global-require
jest.mock('fs', () => require('memfs'));

beforeEach(() => {
  vol.reset();
});

describe('getDocument', () => {
  it('finds a standard document', () => {
    const mockDocument = createDocument();
    vol.fromJSON({
      './blog.json': JSON.stringify(mockDocument),
    }, '/content');
    const document = getDocument('/content/blog');
    expect(document).toMatchObject(mockDocument);
  });

  it('finds a nested document', () => {
    const mockDocument = createDocument();
    vol.fromJSON({
      './de/blog/article.json': JSON.stringify(mockDocument),
    }, '/content');
    const document = getDocument('/content/de/blog/article');
    expect(document).toMatchObject(mockDocument);
  });

  it('finds the index document', () => {
    const mockDocument = createDocument();
    vol.fromJSON({
      './index.json': JSON.stringify(mockDocument),
    }, '/content');
    const document = getDocument('/content/index');
    expect(document).toMatchObject(mockDocument);
  });

  describe('adds a $parent', () => {
    it('adds the property if it exists', () => {
      const mockChild = createDocument();
      const mockParent = createDocument();
      vol.fromJSON({
        './blog.json': JSON.stringify(mockParent),
        './blog/article.json': JSON.stringify(mockChild),
      }, '/content');
      const child = getDocument('/content/blog/article');
      expect(child!.$parent).toMatchObject(mockParent);
    });

    it('returns null if no parent exists', () => {
      const mockChild = createDocument();
      vol.fromJSON({
        './blog/article.json': JSON.stringify(mockChild),
      }, '/content');
      const child = getDocument('/content/blog/article');
      expect(child!.$parent).toEqual(null);
    });
  });

  describe('adds a $url to each version', () => {
    it('calculates the $url for standard documents correctly', () => {
      const mockDocument = createDocument();
      vol.fromJSON({
        './blog.json': JSON.stringify(mockDocument),
      }, '/content');
      const document = getDocument('/content/blog');
      const mockVersion = mockDocument.versions[0];
      const documentVersion = document!.versions[0];
      expect(documentVersion.$url).toEqual(`${mockVersion.language}/${mockVersion.slug}`);
    });

    it('calculates the $url of the index document correctly', () => {
      const mockDocument = createDocument();
      vol.fromJSON({
        './index.json': JSON.stringify(mockDocument),
      }, '/content');
      const document = getDocument('/content/index');
      const mockVersion = mockDocument.versions[0];
      const documentVersion = document!.versions[0];
      expect(documentVersion.$url).toEqual(`${mockVersion.language}`);
    });

    it('calculates the $url of document with a parent correctly', () => {
      const mockParent = createDocument();
      const mockChild = createDocument();
      vol.fromJSON({
        './blog.json': JSON.stringify(mockParent),
        './blog/article.json': JSON.stringify(mockChild),
      }, '/content');
      const document = getDocument('/content/blog/article');
      const mockChildVersion = mockChild.versions[0];
      const mockParentVersion = mockParent.versions[0];
      const documentVersion = document!.versions[0];
      expect(documentVersion.$url).toEqual(`${mockChildVersion.language}/${mockParentVersion.slug}/${mockChildVersion.slug}`);
    });
  });
});
