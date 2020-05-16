import { createVersion } from '@baretheme/test-utils';
import { relativeVersionURLs } from './relative-version-urls';

describe('relativeVersionURLs', () => {
  it('returns object with url keys to relative urls', () => {
    const mockIndex = createVersion();
    const mockTest = createVersion();
    const dictionary = {
      '/de': mockIndex,
      '/de/test': mockTest,
    };
    expect(relativeVersionURLs(dictionary, 'de').index).toEqual(mockIndex);
    expect(relativeVersionURLs(dictionary, 'de')['test']).toEqual(mockTest);
  });
});
