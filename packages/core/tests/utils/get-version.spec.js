import { getVersion } from '../../utils/get-version';
import document from '../data/document';

describe('getVersion', () => {
  it('returns the right version', () => {
    const version = document.versions[0];
    expect(getVersion(document, version.language).title).toEqual(version.title);
  });
});
