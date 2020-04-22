import { createDocument } from '@baretheme/test-utils';
import { getDocumentVersionByLanguage } from './get-document-version-by-language';

describe('getDocumentVersionByLanguage', () => {
  it('returns the right version', () => {
    const document = createDocument();
    const version = document.versions[0];
    expect(getDocumentVersionByLanguage(document, version.language).title).toEqual(version.title);
  });
});