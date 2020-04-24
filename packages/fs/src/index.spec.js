const {
  readJson,
  readAllJson,
} = require('./index');

describe('index', () => {
  it('exports all public methods', () => {
    expect(readJson).toBeDefined();
    expect(readAllJson).toBeDefined();
  });
});
