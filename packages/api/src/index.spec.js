import {
  getDocumentVersionBySlug,
  getNavigation,
  getSite,
  getData,
} from '.';

describe('index', () => {
  it('exports all public methods', () => {
    expect(getDocumentVersionBySlug).toBeDefined();
    expect(getSite).toBeDefined();
    expect(getNavigation).toBeDefined();
    expect(getData).toBeDefined();
  });
});
