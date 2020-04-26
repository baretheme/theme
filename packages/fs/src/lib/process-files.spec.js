import { vol } from 'memfs';
import { createDocument } from '@baretheme/test-utils';
import { processFiles } from './process-files';

jest.mock('fs');

beforeEach(() => {
  vol.reset();
});

describe('processFiles', () => {
  it('should call the callback on each file', () => {
    const mockFile1 = createDocument();
    const mockFile2 = createDocument();
    const cb = jest.fn();

    vol.fromJSON({
      './index.json': JSON.stringify(mockFile1),
      './blog.json': JSON.stringify(mockFile2),
    }, '/content');

    const path = '/content';
    processFiles(path, cb);
    expect(cb).toHaveBeenCalledWith('/content/index.json');
    expect(cb).toHaveBeenCalledWith('/content/blog.json');
    expect(cb).toHaveBeenCalledTimes(2);
  });

  it('should return empty array if none exists', () => {
    const cb = jest.fn();

    vol.fromJSON({
      '.empty': '1',
    }, '/content');

    const path = '/content';
    processFiles(path, cb);
    expect(cb).not.toHaveBeenCalled();
  });
});
