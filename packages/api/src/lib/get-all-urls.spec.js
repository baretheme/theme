import { vol } from 'memfs';
import { createSite, createDocument } from '@baretheme/test-utils';
import { getAllURLs } from './get-all-urls';

jest.mock('fs');

beforeEach(() => {
  vol.reset();
});

describe('getAllURLs', () => {
  it('gets all urls', () => {
    const mockSite = createSite();
    const mockDocument1 = createDocument();
    const mockDocument2 = createDocument();
    const config = {
      dataPath: '/content/data',
      documentsPath: '/content/documents',
    };

    vol.fromJSON({
      './data/site.json': JSON.stringify(mockSite),
      './documents/index.json': JSON.stringify(mockDocument1),
      './documents/blog.json': JSON.stringify(mockDocument2),
    }, '/content');

    const allURLs = getAllURLs(config);
    expect(allURLs.length).toEqual(mockDocument1.versions.length + mockDocument2.versions.length);
  });

  it('removes the defaultLanguage from the urls', () => {
    const mockSite = createSite();
    const mockDocument1 = createDocument();
    const mockDocument2 = createDocument();
    const config = {
      dataPath: '/content/data',
      documentsPath: '/content/documents',
    };

    vol.fromJSON({
      './data/site.json': JSON.stringify(mockSite),
      './documents/index.json': JSON.stringify(mockDocument1),
      './documents/blog.json': JSON.stringify(mockDocument2),
    }, '/content');

    const allURLs = getAllURLs(config);
    allURLs.forEach((url) => {
      expect(url).not.toContain(`/${mockSite.defaultLanguage}`);
    });
  });

  describe('with publicOnly option', () => {

  });
});
