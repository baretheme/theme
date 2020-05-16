import { vol } from 'memfs';
import { readDir } from './read-dir';

jest.mock('fs');

beforeEach(() => {
  vol.reset();
});

describe('readDir', () => {
  it('should read all documents if dir exists', () => {
    vol.fromJSON({
      './index.json': '1',
      './blog.json': '2',
    }, '/content');
    const path = '/content';
    expect(readDir(path)).toEqual(expect.arrayContaining(['/content/index.json', '/content/blog.json']));
  });

  it('should ignore subfolders', () => {
    vol.fromJSON({
      './index.json': '1',
      './blog.json': '2',
      './blog/article.json': '3',
    }, '/content');
    const path = '/content';
    expect(readDir(path)).toEqual(expect.arrayContaining(['/content/index.json', '/content/blog.json']));
    expect(readDir(path)).not.toEqual(expect.arrayContaining(['/content/blog']));
  });

  it('should return null if no dir exists', () => {
    vol.fromJSON({
      './index.json': '1',
    }, '/content');
    const path = '/foo';
    expect(readDir(path)).toEqual(null);
  });

  it('should return empty array if no file exists', () => {
    vol.fromJSON({
      '.empty': '1',
    }, '/content');
    const path = '/content';
    expect(readDir(path)).toEqual([]);
  });

  it('should only return json files', () => {
    vol.fromJSON({
      './index.json': '1',
      './blog.js': '1',
      './articles.jsonp': '1',
    }, '/content');
    const path = '/content';
    expect(readDir(path)).toEqual(['/content/index.json']);
  });

  describe('with recursive option', () => {
    it('should find files in subfolders', () => {
      vol.fromJSON({
        './index.json': '1',
        './blog.json': '2',
        './blog/article.json': '3',
      }, '/content');
      const path = '/content';
      expect(readDir(path, { recursive: true })).toEqual(expect.arrayContaining(['/content/index.json', '/content/blog.json', '/content/blog/article.json']));
    });
  });
});
