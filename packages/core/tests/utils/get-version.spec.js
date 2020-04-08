import { getVersion } from '../../utils/get-version';
import { fakeDocument } from '../fakes/document';

describe('getVersion', () => {
  it('returns the right version', () => {
    const document = fakeDocument();
    const version = document.versions[0];
    expect(getVersion(document, version.language).title).toEqual(version.title);
  });
});
