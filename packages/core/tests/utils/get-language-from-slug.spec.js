import { getLanguageFromSlug } from '../../utils/get-language-from-slug';

describe('getLanguageFromSlug', () => {
  it('returns the right name', () => {
    expect(getLanguageFromSlug('en').name).toEqual('en');
    expect(getLanguageFromSlug('/en').name).toEqual('en');
    expect(getLanguageFromSlug('/en/').name).toEqual('en');
    expect(getLanguageFromSlug('/de/').name).toEqual('de');
    expect(getLanguageFromSlug('/de/blog').name).toEqual('de');
    expect(getLanguageFromSlug('/de/blog/test').name).toEqual('de');
  });

  it('returns the right path', () => {
    expect(getLanguageFromSlug('en').path).toEqual('en');
    expect(getLanguageFromSlug('/en').path).toEqual('/en');
    expect(getLanguageFromSlug('/en/').path).toEqual('/en/');
    expect(getLanguageFromSlug('/de/').path).toEqual('/de/');
    expect(getLanguageFromSlug('/de/blog').path).toEqual('/de/');
    expect(getLanguageFromSlug('/de/blog/test').path).toEqual('/de/');
  });

  it('returns null if none detected', () => {
    expect(getLanguageFromSlug('/')).toEqual(null);
    expect(getLanguageFromSlug('')).toEqual(null);
    expect(getLanguageFromSlug()).toEqual(null);
  });
});
