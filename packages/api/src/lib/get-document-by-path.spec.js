import { readDocument } from '@baretheme/fs';
import { getDocumentByPath } from './get-document-by-path';

jest.mock('@baretheme/fs', () => ({
  readDocument: jest.fn(),
}));

beforeEach(() => {
  readDocument.mockClear();
});

describe('getDocumentByPath', () => {
  it('requests the index for "/"', async () => {
    await getDocumentByPath('/');
    expect(readDocument).toHaveBeenCalledTimes(1);
    expect(readDocument).toHaveBeenCalledWith('index');
  });

  it('requests the passed slug', async () => {
    await getDocumentByPath('/de');
    expect(readDocument).toHaveBeenCalledTimes(1);
    expect(readDocument).toHaveBeenCalledWith('/de');
  });

  describe('requests the index by default', () => {
    it('with no parameter', async () => {
      await getDocumentByPath();
      expect(readDocument).toHaveBeenCalledTimes(1);
      expect(readDocument).toHaveBeenCalledWith('index');
    });

    it('with undefined', async () => {
      await getDocumentByPath(undefined);
      expect(readDocument).toHaveBeenCalledTimes(1);
      expect(readDocument).toHaveBeenCalledWith('index');
    });
  });

  describe('returns null if explicit falsy value passed', () => {
    it('with null', async () => {
      const document = await getDocumentByPath(null);
      expect(readDocument).toHaveBeenCalledTimes(0);
      expect(document).toBe(null);
    });

    it('with false', async () => {
      const document = await getDocumentByPath(false);
      expect(readDocument).toHaveBeenCalledTimes(0);
      expect(document).toBe(null);
    });
  });
});
