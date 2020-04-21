const fs = require('fs-extra');
const { readDir } = require('./read-dir');

jest.mock('fs-extra', () => ({
  existsSync: jest.fn(),
  readdirSync: jest.fn(),
}));

beforeEach(() => {
  fs.existsSync.mockClear();
  fs.readdirSync.mockClear();
});

describe('readDir', () => {
  it('should read all documents if dir exists', () => {
    fs.existsSync.mockReturnValue(true);
    fs.readdirSync.mockReturnValue([
      'file-1.json',
      'file-2.json',
    ]);
    const path = 'content/documents';
    readDir(path);
    expect(fs.readdirSync).toHaveBeenCalledTimes(1);
    expect(fs.readdirSync).toHaveBeenCalledWith(path);
  });

  it('should return null if no dir exists', () => {
    fs.existsSync.mockReturnValue(false);
    const dir = readDir('content/documents');
    expect(fs.readdirSync).toHaveBeenCalledTimes(0);
    expect(dir).toBe(null);
  });

  it('should return empty array if no file preset', () => {
    fs.existsSync.mockReturnValue(true);
    fs.readdirSync.mockReturnValue([]);
    const dir = readDir('content/documents');
    expect(fs.readdirSync).toHaveBeenCalledTimes(1);
    expect(dir).toEqual([]);
  });
});
