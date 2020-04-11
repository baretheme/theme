import { readDir } from '../../lib/read-dir';
import { readJson } from '../../lib/read-json';
import { readAllJson } from '../../lib/read-all-json';

jest.mock('../../lib/read-dir', () => ({
  readDir: jest.fn(),
}));

jest.mock('../../lib/read-json', () => ({
  readJson: jest.fn(),
}));

beforeEach(() => {
  readDir.mockClear();
  readJson.mockClear();
});

describe('readAllJson', () => {
  it('should read all json files if exists', () => {
    const mockPath = 'some/path';
    const mockFiles = ['file-1.json', 'file-2.json'];
    const mockJson1 = {
      title: 'test-1',
    };
    const mockJson2 = {
      title: 'test-2',
    };
    const mockJsonFiles = {
      'some/path/file-1.json': mockJson1,
      'some/path/file-2.json': mockJson2,
    };

    readDir.mockReturnValue(mockFiles);
    readJson.mockImplementation((path) => mockJsonFiles[path]);

    const jsonFiles = readAllJson(mockPath);

    expect(readDir).toHaveBeenCalledTimes(1);
    expect(readDir).toHaveBeenCalledWith(mockPath);
    expect(readJson).toHaveBeenCalledTimes(mockFiles.length);
    expect(jsonFiles).toEqual([mockJson1, mockJson2]);
  });

  it('should return empty array if none exists', () => {
    const mockPath = 'some/path';
    const mockFiles = [];
    const mockJson1 = {
      title: 'test-1',
    };
    const mockJson2 = {
      title: 'test-2',
    };
    const mockJsonFiles = {
      'some/path/file-1.json': mockJson1,
      'some/path/file-2.json': mockJson2,
    };

    readDir.mockReturnValue(mockFiles);
    readJson.mockImplementation((path, name) => mockJsonFiles[name]);

    const jsonFiles = readAllJson(mockPath);

    expect(readDir).toHaveBeenCalledTimes(1);
    expect(readDir).toHaveBeenCalledWith(mockPath);
    expect(readJson).toHaveBeenCalledTimes(0);
    expect(jsonFiles).toEqual([]);
  });
});
