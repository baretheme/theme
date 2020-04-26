import { vol } from 'memfs';
import { createDocument } from '@baretheme/test-utils';
import { getAllDocuments } from './get-all-documents';

jest.mock('fs');

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

  describe('publicOnly option', () => {
    describe('if enabled', () => {
      it('finds all documents that are not a draft', () => {
        const mockDocument1 = createDocument({ draft: true });
        const mockDocument2 = createDocument({ draft: false });
        const mockDocument3 = createDocument({ draft: true });
        vol.fromJSON({
          './1.json': JSON.stringify(mockDocument1),
          './2.json': JSON.stringify(mockDocument2),
          './3.json': JSON.stringify(mockDocument3),
        }, '/content');
        const documents = getAllDocuments('/content', { publicOnly: true });
        expect(documents.length).toEqual(1);
      });
    });
    describe('if disabled', () => {
      it('finds all documents', () => {
        const mockDocument1 = createDocument({ draft: true });
        const mockDocument2 = createDocument({ draft: false });
        const mockDocument3 = createDocument({ draft: true });
        vol.fromJSON({
          './1.json': JSON.stringify(mockDocument1),
          './2.json': JSON.stringify(mockDocument2),
          './3.json': JSON.stringify(mockDocument3),
        }, '/content');
        const documents = getAllDocuments('/content', { publicOnly: false });
        expect(documents.length).toEqual(3);
      });
    });
  });
});
