import { getDocumentBySlug } from '../../lib/get-document-by-slug';
import { getDocumentByPath } from '../../lib/get-document-by-path';

jest.mock('../../lib/get-document-by-path', () => ({
  getDocumentByPath: jest.fn(),
}));

beforeEach(() => {
  getDocumentByPath.mockClear();
});

describe('getDocumentBySlug', () => {
  it('requests the document by slug', () => {
    getDocumentBySlug('/');
    expect(getDocumentByPath).toHaveBeenCalledTimes(1);
    expect(getDocumentByPath).toHaveBeenCalledWith('/');
  });

  it('requests the document without language', () => {
    getDocumentBySlug('/de/blog');
    expect(getDocumentByPath).toHaveBeenCalledTimes(1);
    expect(getDocumentByPath).toHaveBeenCalledWith('/blog');
  });
});
