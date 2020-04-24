import { vol } from 'memfs';
import { createDocument } from '@baretheme/test-utils';
import { readAllJson } from './read-all-json';

jest.mock('fs');

beforeEach(() => {
  vol.reset();
});

describe('readAllJson', () => {
  it('should read all json files if exists', () => {
    const mockFile1 = createDocument();
    const mockFile2 = createDocument();

    vol.fromJSON({
      './index.json': JSON.stringify(mockFile1),
      './blog.json': JSON.stringify(mockFile2),
    }, '/content');

    const path = '/content';
    const files = readAllJson(path);
    expect(files).toEqual(expect.arrayContaining([mockFile1, mockFile2]));
  });

  it('should return empty array if none exists', () => {
    vol.fromJSON({
      '.empty': '1',
    }, '/content');

    const path = '/content';
    const files = readAllJson(path);
    expect(files).toEqual([]);
  });
});
