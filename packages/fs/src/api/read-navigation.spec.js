const { readJson } = require('../lib/read-json');
const { readNavigation } = require('./read-navigation');
const { getConfig } = require('./get-config');

jest.mock('../lib/read-json', () => ({
  readJson: jest.fn(),
}));

jest.mock('./get-config', () => ({
  getConfig: jest.fn(),
}));

beforeEach(() => {
  readJson.mockClear();
  getConfig.mockClear();
});

describe('readNavigation', () => {
  it('passes the dataPath to readNavigation', () => {
    getConfig.mockReturnValue({
      dataPath: 'data',
    });
    readNavigation();
    expect(readJson).toHaveBeenCalledWith('data/navigation');
  });
});
