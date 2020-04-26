import { getLanguageFromPath } from './get-language-from-path';

describe('getLanguageFromPath', () => {
  it('should get the default language from a path', () => {
    const mockLanguage1 = { code: 'en', label: 'English' };
    const mockLanguage2 = { code: 'de', label: 'German' };
    const languages = [mockLanguage1, mockLanguage2];
    const defaultLanguage = 'en';
    const language = getLanguageFromPath(languages, defaultLanguage, '/test');
    expect(language).toMatchObject(mockLanguage1);
  });

  it('should get a specific language from a path', () => {
    const mockLanguage1 = { code: 'en', label: 'English' };
    const mockLanguage2 = { code: 'de', label: 'German' };
    const languages = [mockLanguage1, mockLanguage2];
    const defaultLanguage = 'en';
    const language = getLanguageFromPath(languages, defaultLanguage, '/de/test');
    expect(language).toMatchObject(mockLanguage2);
  });
});
