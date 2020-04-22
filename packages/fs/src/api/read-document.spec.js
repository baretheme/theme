const { readJson } = require('../lib/read-json');
const { readDocument } = require('./read-document');
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

describe('readDocument', () => {
  it('passes the dataPath to readDocument', () => {
    getConfig.mockReturnValue({
      documentsPath: 'documents',
    });
    const documentName = 'test';
    readDocument(documentName);
    expect(readJson).toHaveBeenCalledWith(`documents/${documentName}`);
  });
});
