import {
  getAllDocuments,
  getAllURLs,
  getAllVersions,
  getDocumentVersionBySlug,
  getDocument,
  getFilename,
  getLanguageFromPath,
  getSite,
  getVersionURLs,
  optimizeVersion,
} from '.';

describe('index', () => {
  it('exports all public methods', () => {
    expect(getAllDocuments).toBeDefined();
    expect(getAllURLs).toBeDefined();
    expect(getAllVersions).toBeDefined();
    expect(getDocumentVersionBySlug).toBeDefined();
    expect(getDocument).toBeDefined();
    expect(getFilename).toBeDefined();
    expect(getLanguageFromPath).toBeDefined();
    expect(getSite).toBeDefined();
    expect(getVersionURLs).toBeDefined();
    expect(optimizeVersion).toBeDefined();
  });
});
