import { readSite } from '@baretheme/fs';
import { getSite } from './get-site';

jest.mock('@baretheme/fs', () => ({
  readSite: jest.fn(),
}));

describe('getSite', () => {
  it('returns the site', () => {
    getSite();
    expect(readSite).toHaveBeenCalledTimes(1);
  });
});
