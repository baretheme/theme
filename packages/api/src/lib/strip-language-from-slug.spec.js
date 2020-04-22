import { stripLanguageFromSlug } from './strip-language-from-slug';

describe('stripLanguageFromSlug', () => {
  it('returns slug without language', () => {
    expect(stripLanguageFromSlug('/de/blog')).toEqual('/blog');
    expect(stripLanguageFromSlug('/de')).toEqual('/');
  });
});
