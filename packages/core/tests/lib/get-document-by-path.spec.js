import { readDocumentByFilePath } from '@baretheme/fs';
import { getDocumentByPath } from '../../lib/get-document-by-path';

jest.mock('@baretheme/fs', () => ({
  readDocumentByFilePath: jest.fn(),
}));

beforeEach(() => {
  readDocumentByFilePath.mockClear();
});

describe('getDocumentByPath', () => {
  it('requests the index for "/"', async () => {
    await getDocumentByPath('/');
    expect(readDocumentByFilePath).toHaveBeenCalledTimes(1);
    expect(readDocumentByFilePath).toHaveBeenCalledWith('index');
  });

  it('requests the passed slug', async () => {
    await getDocumentByPath('/de');
    expect(readDocumentByFilePath).toHaveBeenCalledTimes(1);
    expect(readDocumentByFilePath).toHaveBeenCalledWith('/de');
  });

  describe('requests the index by default', () => {
    it('with no parameter', async () => {
      await getDocumentByPath();
      expect(readDocumentByFilePath).toHaveBeenCalledTimes(1);
      expect(readDocumentByFilePath).toHaveBeenCalledWith('index');
    });

    it('with undefined', async () => {
      await getDocumentByPath(undefined);
      expect(readDocumentByFilePath).toHaveBeenCalledTimes(1);
      expect(readDocumentByFilePath).toHaveBeenCalledWith('index');
    });
  });

  describe('returns null if explicit falsy value passed', () => {
    it('with null', async () => {
      const document = await getDocumentByPath(null);
      expect(readDocumentByFilePath).toHaveBeenCalledTimes(0);
      expect(document).toBe(null);
    });

    it('with false', async () => {
      const document = await getDocumentByPath(false);
      expect(readDocumentByFilePath).toHaveBeenCalledTimes(0);
      expect(document).toBe(null);
    });
  });
});
