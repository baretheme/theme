const mock = require('mock-fs');
const { createDocument } = require('@baretheme/test-utils');
const { readJson } = require('../../lib/read-json');

afterEach(() => {
  mock.restore();
});

describe('readJson', () => {
  it('should read a file if exists', () => {
    const mockFile = createDocument();

    mock({
      'content/documents': {
        'file.json': mockFile,
      },
    });

    const path = 'content/documents/file.json';
    const file = readJson(path);
    expect(file).toEqual(mockFile);
  });

  // it('should return null if file does not exist', () => {
  //   const path = 'content/documents/file.json';
  //   const file = readJson(path);
  //   expect(file).toBe(null);
  // });

  // it('should throw an error if file is not json', () => {
  //   const mockFile = 'test';
  //   const path = 'content/documents/file.json';
  //   expect(() => readJson(path)).toThrow();
  //   expect(fs.readFileSync).toHaveBeenCalledTimes(1);
  //   expect(fs.readFileSync).toHaveBeenCalledWith(path, 'utf8');
  // });
});
