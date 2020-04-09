import { readSite } from '@baretheme/fs';
import { getSite } from '../../lib/get-site';

jest.mock('@baretheme/fs', () => ({
  readSite: jest.fn(),
}));

describe('getSite', () => {
  it('returns the site', async () => {
    await getSite();
    expect(readSite).toHaveBeenCalledTimes(1);
  });
});
