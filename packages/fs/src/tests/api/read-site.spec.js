const { readJson } = require('../../lib/read-json');
const { readSite } = require('../../api/read-site');
const { getConfig } = require('../../api/get-config');

jest.mock('../../lib/read-json', () => ({
  readJson: jest.fn(),
}));

beforeEach(() => {
  readJson.mockClear();
});

describe('readSite', () => {
  it('passes the dataPath to readSite', () => {
    const config = getConfig();
    readSite();
    expect(readJson).toHaveBeenCalledWith(`${config.dataPath}/site`);
  });
});
