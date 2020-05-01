import { createVersion } from '@baretheme/test-utils';
import { getVersionURLs } from './get-version-urls';

describe('getVersionURLs', () => {
  it('should get all urls of versions', () => {
    const url1 = 'foo';
    const url2 = 'bar';
    const versions = [createVersion({ $url: url1 }), createVersion({ $url: url2 })];
    expect(getVersionURLs(versions)).toEqual(expect.arrayContaining([url1, url2]));
  });
});
