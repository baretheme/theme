const {
  readJson,
  readDir,
  processFiles,
  ensureJson,
  removeFromFilename,
} = require('./index');

describe('index', () => {
  it('exports all public methods', () => {
    expect(readJson).toBeDefined();
    expect(readDir).toBeDefined();
    expect(processFiles).toBeDefined();
    expect(ensureJson).toBeDefined();
    expect(removeFromFilename).toBeDefined();
  });
});
