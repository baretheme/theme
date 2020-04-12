import { getDocumentVersionByLanguage } from '../../lib/get-document-version-by-language';
import { createDocument } from '../fixtures/document';

describe('getDocumentVersionByLanguage', () => {
  it('returns the right version', () => {
    const document = createDocument();
    const version = document.versions[0];
    expect(getDocumentVersionByLanguage(document, version.language).title).toEqual(version.title);
  });
});
