import { vol } from 'memfs';
import { createDocument } from '@baretheme/test-utils';
import { getAllDocuments } from './get-all-documents';

// eslint-disable-next-line global-require
jest.mock('fs', () => require('memfs'));

beforeEach(() => {
  vol.reset();
});

describe('getAllDocuments', () => {
  it('finds all documents on the first level', () => {
    const mockDocument1 = createDocument();
    const mockDocument2 = createDocument();
    vol.fromJSON({
      './1.json': JSON.stringify(mockDocument1),
      './2.json': JSON.stringify(mockDocument2),
    }, '/content');
    const documents = getAllDocuments('/content');
    expect(documents[0]).toMatchObject(mockDocument1);
    expect(documents[1]).toMatchObject(mockDocument2);
  });

  it('finds all documents recursively', () => {
    const mockDocument1 = createDocument();
    const mockDocument2 = createDocument();
    vol.fromJSON({
      './blog.json': JSON.stringify(mockDocument1),
      './blog/article.json': JSON.stringify(mockDocument2),
    }, '/content');
    const documents = getAllDocuments('/content');
    expect(documents[0]).toMatchObject(mockDocument1);
    expect(documents[1]).toMatchObject(mockDocument2);
  });
});
