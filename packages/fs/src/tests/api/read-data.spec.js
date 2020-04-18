const { createDocuments } = require('@baretheme/support');
const { readAllJson } = require('../../lib/read-all-json');
const { readData } = require('../../api/read-data');
const { getConfig } = require('../../api/get-config');

jest.mock('../../lib/read-all-json', () => ({
  readAllJson: jest.fn(),
}));

beforeEach(() => {
  readAllJson.mockClear();
});

describe('readData', () => {
  it('passes the dataPath to readData', () => {
    const config = getConfig();
    readData();
    expect(readAllJson).toHaveBeenCalledWith(config.dataPath);
  });

  it('groups data by filename', () => {
    const mockDocuments = createDocuments();
    readAllJson.mockReturnValue(mockDocuments);
  });
});
