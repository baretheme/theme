import { createDocumentVersion } from '@baretheme/test-utils';
import { documentVersionsByURL } from './document-versions-by-url';

describe('versionsByUrl', () => {
  it('creates a dictionary with versions by url', () => {
    const versions = [createDocumentVersion(), createDocumentVersion(), createDocumentVersion()];
    expect(documentVersionsByURL(versions));
  });
});
