import { createDocument } from '@baretheme/test-utils';
import { getAllVersions } from './get-all-versions';

describe('getAllVersions', () => {
  it('should get all versions from a document', () => {
    const mockDocument1 = createDocument();
    const mockDocument2 = createDocument();
    const documents = [mockDocument1, mockDocument2];
    expect(getAllVersions(documents)).toEqual(expect.arrayContaining([
      ...mockDocument1.versions,
      ...mockDocument2.versions,
    ]));
    expect(getAllVersions(documents)).not.toEqual([]);
  });

  it('should return empty array if no versions available', () => {
    const mockDocument1 = createDocument({ versions: [] });
    const mockDocument2 = createDocument({ versions: [] });
    const documents = [mockDocument1, mockDocument2];
    expect(getAllVersions(documents)).toEqual([]);
  });
});
