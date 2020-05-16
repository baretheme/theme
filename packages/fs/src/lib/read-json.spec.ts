import { vol } from 'memfs';
import { createDocument } from '@baretheme/test-utils';
import { readJson } from './read-json';

jest.mock('fs');

beforeEach(() => {
  vol.reset();
});

describe('readJson', () => {
  it('should read a file if exists', () => {
    const mockFile = createDocument();

    vol.fromJSON({
      './index.json': JSON.stringify(mockFile),
    }, '/content');

    const path = '/content/index.json';
    const file = readJson(path);
    expect(file).toEqual(mockFile);
  });

  it('should return null if file does not exist', () => {
    vol.fromJSON({});
    const path = 'content/documents/file.json';
    const file = readJson(path);
    expect(file).toBe(null);
  });

  it('should return null if file is not json', () => {
    vol.fromJSON({
      './index.txt': 'foo',
    }, '/content');
    const path = 'content/index.json';
    const file = readJson(path);
    expect(file).toBe(null);
  });
});
