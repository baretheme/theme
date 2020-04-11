import fs from 'fs';
import { readJson } from '../../lib/read-json';

jest.mock('fs', () => ({
  existsSync: jest.fn(),
  readFileSync: jest.fn(),
}));

beforeEach(() => {
  fs.existsSync.mockClear();
  fs.readFileSync.mockClear();
});

describe('readJson', () => {
  it('should read a file if exists', () => {
    const mockFile = { title: 'test' };
    const path = 'content/documents/file.json';

    fs.existsSync.mockReturnValue(true);
    fs.readFileSync.mockReturnValue(JSON.stringify(mockFile));

    const file = readJson(path);
    expect(fs.readFileSync).toHaveBeenCalledTimes(1);
    expect(fs.readFileSync).toHaveBeenCalledWith(path, 'utf8');
    expect(file).toEqual(mockFile);
  });

  it('should return null if file does not exist', () => {
    const path = 'content/documents/file.json';

    fs.existsSync.mockReturnValue(false);

    const file = readJson(path);
    expect(fs.readFileSync).toHaveBeenCalledTimes(0);
    expect(file).toBe(null);
  });

  it('should throw an error if file is not json', () => {
    const mockFile = 'test';
    const path = 'content/documents/file.json';

    fs.existsSync.mockReturnValue(true);
    fs.readFileSync.mockReturnValue(mockFile);

    expect(() => readJson(path)).toThrow();
    expect(fs.readFileSync).toHaveBeenCalledTimes(1);
    expect(fs.readFileSync).toHaveBeenCalledWith(path, 'utf8');
  });
});
