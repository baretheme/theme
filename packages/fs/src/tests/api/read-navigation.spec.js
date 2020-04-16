const { readJson } = require('../../lib/read-json');
const { readNavigation } = require('../../api/read-navigation');
const { getConfig } = require('../../api/get-config');

jest.mock('../../lib/read-json', () => ({
  readJson: jest.fn(),
}));

beforeEach(() => {
  readJson.mockClear();
});

describe('readNavigation', () => {
  it('passes the dataPath to readNavigation', () => {
    const config = getConfig();
    readNavigation();
    expect(readJson).toHaveBeenCalledWith(`${config.dataPath}/navigation`);
  });
});
