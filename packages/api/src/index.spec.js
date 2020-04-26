import {
  getDocument,
  getAllDocuments,
} from '.';

describe('index', () => {
  it('exports all public methods', () => {
    expect(getDocument).toBeDefined();
    expect(getAllDocuments).toBeDefined();
  });
});
