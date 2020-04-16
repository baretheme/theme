const { readAllJson } = require('../../lib/read-all-json');
const { readAllDocuments } = require('../../api/read-all-documents');
const { getConfig } = require('../../api/get-config');

jest.mock('../../lib/read-all-json', () => ({
  readAllJson: jest.fn(),
}));

beforeEach(() => {
  readAllJson.mockClear();
});

describe('readAllDocuments', () => {
  it('passes the dataPath to readAllDocuments', () => {
    const config = getConfig();
    readAllDocuments();
    expect(readAllJson).toHaveBeenCalledWith(config.documentsPath);
  });
});