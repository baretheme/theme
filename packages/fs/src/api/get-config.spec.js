import { readJson } from '../lib/read-json';
import { getConfig } from './get-config';
import { DEFAULTS } from '../constants';

jest.mock('../../lib/read-json', () => ({
  readJson: jest.fn(),
}));

beforeEach(() => {
  readJson.mockClear();
});

describe('getConfig', () => {
  it('reads the config if exists', () => {
    const mockConfig = { test: 'foo' };
    readJson.mockReturnValue(mockConfig);

    const config = getConfig();
    expect(readJson).toHaveBeenCalledTimes(1);
    expect(config).toEqual(mockConfig);
  });

  it('returns the defaults if no config exists', () => {
    readJson.mockReturnValue(null);

    const config = getConfig();
    expect(readJson).toHaveBeenCalledTimes(1);
    expect(config).toEqual(DEFAULTS);
  });
});
