const { readJson } = require('../../lib/read-json');
const { readDocument } = require('../../api/read-document');
const { getConfig } = require('../../api/get-config');

jest.mock('../../lib/read-json', () => ({
  readJson: jest.fn(),
}));

beforeEach(() => {
  readJson.mockClear();
});

describe('readDocument', () => {
  it('passes the dataPath to readDocument', () => {
    const config = getConfig();
    const documentName = 'test';
    readDocument(documentName);
    expect(readJson).toHaveBeenCalledWith(`${config.documentsPath}/${documentName}`);
  });
});
