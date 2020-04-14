import { readNavigation } from '@baretheme/fs';
import { getNavigation } from '../../api/get-navigation';

jest.mock('@baretheme/fs', () => ({
  readNavigation: jest.fn(),
}));

describe('getNavigation', () => {
  it('returns the site', async () => {
    await getNavigation();
    expect(readNavigation).toHaveBeenCalledTimes(1);
  });
});
