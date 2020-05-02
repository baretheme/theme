import { vol } from 'memfs';
import { createSite, createDocument, createVersion } from '@baretheme/test-utils';
import { getAllDocumentsByURL } from './get-all-documents-by-url';

// eslint-disable-next-line global-require
jest.mock('fs', () => require('memfs'));

beforeEach(() => {
  vol.reset();
});

describe('getAllDocumentsByURL', () => {
  it('gets all documents by url', () => {
    const site = createSite({ defaultLanguage: 'en' });
    const index = createDocument({
      versions: [
        createVersion({
          slug: 'foo',
          language: 'en',
        }),
        createVersion({
          slug: 'bar',
          language: 'de',
        }),
      ],
    });
    const blog = createDocument({
      versions: [
        createVersion({
          slug: 'blog',
          language: 'en',
        }),
        createVersion({
          slug: 'artikel',
          language: 'de',
        }),
      ],
    });
    const myNewArticle = createDocument({
      versions: [
        createVersion({
          slug: 'my-new-article',
          language: 'en',
        }),
        createVersion({
          slug: 'mein-neuer-artikel',
          language: 'de',
        }),
      ],
    });
    vol.fromJSON({
      './data/site.json': JSON.stringify(site),
      './documents/index.json': JSON.stringify(index),
      './documents/blog.json': JSON.stringify(blog),
      './documents/blog/my-new-article.json': JSON.stringify(myNewArticle),
    }, '/content');
    const config = {
      dataPath: '/content/data',
      documentsPath: '/content/documents',
    };
    const documents = getAllDocumentsByURL(config);
    expect(documents.index).toMatchObject(index.versions[0]);
    expect(documents.de).toMatchObject(index.versions[1]);
    expect(documents.blog).toMatchObject(blog.versions[0]);
    expect(documents['de/artikel']).toMatchObject(blog.versions[1]);
    expect(documents['blog/my-new-article']).toMatchObject(myNewArticle.versions[0]);
    expect(documents['de/artikel/mein-neuer-artikel']).toMatchObject(myNewArticle.versions[1]);
  });
});
