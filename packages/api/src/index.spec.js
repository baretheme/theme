import {
  getAllDocumentsByURL,
  getAllDocuments,
  getAllVersions,
  getDocument,
  getFilename,
  getLanguageFromPath,
  getSite,
  optimizeVersion,
} from '.';

describe('index', () => {
  it('exports all public methods', () => {
    expect(getAllDocumentsByURL).toBeDefined();
    expect(getAllDocuments).toBeDefined();
    expect(getAllVersions).toBeDefined();
    expect(getDocument).toBeDefined();
    expect(getFilename).toBeDefined();
    expect(getLanguageFromPath).toBeDefined();
    expect(getSite).toBeDefined();
    expect(optimizeVersion).toBeDefined();
  });
});
