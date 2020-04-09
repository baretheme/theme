import { stripLanguageFromSlug } from '../../lib/strip-language-from-slug';

describe('stripLanguageFromSlug', () => {
  it('returns slug without language', () => {
    expect(stripLanguageFromSlug('/de/blog')).toEqual('/blog');
    expect(stripLanguageFromSlug('/de')).toEqual('/');
  });
});
