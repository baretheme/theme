const {
  setup,
  getConfig,
  readAllDocuments,
  readDocument,
  readNavigation,
  readSite,
} = require('../index');

describe('index', () => {
  it('exports all public methods', () => {
    expect(setup).toBeDefined();
    expect(getConfig).toBeDefined();
    expect(readAllDocuments).toBeDefined();
    expect(readDocument).toBeDefined();
    expect(readNavigation).toBeDefined();
    expect(readSite).toBeDefined();
  });
});
