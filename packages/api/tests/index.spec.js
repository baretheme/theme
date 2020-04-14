import {
  getDocumentVersionBySlug,
  getNavigation,
  getSite,
} from '..';

describe('index', () => {
  it('exports all public methods', () => {
    expect(getDocumentVersionBySlug).toBeDefined();
    expect(getSite).toBeDefined();
    expect(getNavigation).toBeDefined();
  });
});
