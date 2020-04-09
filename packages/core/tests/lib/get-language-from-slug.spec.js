import { getLanguageFromSlug } from '../../lib/get-language-from-slug';

describe('getLanguageFromSlug', () => {
  it('returns the right language', () => {
    expect(getLanguageFromSlug('en')).toEqual('en');
    expect(getLanguageFromSlug('/en')).toEqual('en');
    expect(getLanguageFromSlug('/en/')).toEqual('en');
    expect(getLanguageFromSlug('/de/')).toEqual('de');
    expect(getLanguageFromSlug('/de/blog')).toEqual('de');
    expect(getLanguageFromSlug('/de/blog/test')).toEqual('de');
  });

  it('returns null if none detected', () => {
    expect(getLanguageFromSlug('/')).toEqual(null);
    expect(getLanguageFromSlug('/blog')).toEqual(null);
    expect(getLanguageFromSlug('blog')).toEqual(null);
    expect(getLanguageFromSlug('')).toEqual(null);
    expect(getLanguageFromSlug()).toEqual(null);
    expect(getLanguageFromSlug(undefined)).toEqual(null);
    expect(getLanguageFromSlug(null)).toEqual(null);
    expect(getLanguageFromSlug(0)).toEqual(null);
  });
});
