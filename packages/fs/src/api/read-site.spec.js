const { readJson } = require('../lib/read-json');
const { readSite } = require('./read-site');
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

describe('readSite', () => {
  it('passes the dataPath to readSite', () => {
    getConfig.mockReturnValue({
      dataPath: 'data',
    });
    readSite();
    expect(readJson).toHaveBeenCalledWith('data/site');
  });
});
