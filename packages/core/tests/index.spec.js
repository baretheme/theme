import {
  getDocumentVersionBySlug,
  Document,
} from '../index';

describe('index', () => {
  it('exports all public methods', () => {
    expect(getDocumentVersionBySlug).toBeDefined();
  });

  it('exports all public components', () => {
    expect(Document).toBeDefined();
  });
});
