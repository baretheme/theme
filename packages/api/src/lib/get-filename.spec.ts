import { getFilename } from './get-filename';

describe('getFilename', () => {
  it.each([
    ['en', 'index', 'index'],
    ['en', 'blog', 'blog'],
    ['de', 'de', 'index'],
    ['de', 'de/index', 'index'],
    ['de', 'de/blog', 'blog'],
    ['de', 'de/blog/article', 'blog/article'],
  ])('getFilename(%s, %s, %s)', (language, slug, expected) => {
    expect(getFilename(language, slug)).toBe(expected);
  });
});
