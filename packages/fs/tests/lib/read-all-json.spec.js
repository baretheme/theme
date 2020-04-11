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
    const mockDocument1 = {
      title: 'test-1',
    };
    const mockDocument2 = {
      title: 'test-2',
    };
    const mockDocumentFiles = {
      'file-1.json': mockDocument1,
      'file-2.json': mockDocument2,
    };

    readDir.mockReturnValue(mockFiles);
    readJson.mockImplementation((path) => mockDocumentFiles[path]);

    const documents = readAllJson(mockPath);

    expect(readDir).toHaveBeenCalledTimes(1);
    expect(readDir).toHaveBeenCalledWith(mockPath);
    expect(readJson).toHaveBeenCalledTimes(mockFiles.length);
    expect(documents).toEqual([mockDocument1, mockDocument2]);
  });

  it('should return empty array if none exists', () => {
    const mockPath = 'some/path';
    const mockFiles = [];
    const mockDocument1 = {
      title: 'test-1',
    };
    const mockDocument2 = {
      title: 'test-2',
    };
    const mockDocumentFiles = {
      'file-1.json': mockDocument1,
      'file-2.json': mockDocument2,
    };

    readDir.mockReturnValue(mockFiles);
    readJson.mockImplementation((path, name) => mockDocumentFiles[name]);

    const documents = readAllJson(mockPath);

    expect(readDir).toHaveBeenCalledTimes(1);
    expect(readDir).toHaveBeenCalledWith(mockPath);
    expect(readJson).toHaveBeenCalledTimes(0);
    expect(documents).toEqual([]);
  });
});
