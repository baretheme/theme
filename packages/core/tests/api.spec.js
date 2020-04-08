import { readSite, readDocumentByFileName } from '@baretheme/fs';
import { getDocumentBySlug } from '../api';
import { fakeSite } from './fakes/site';
import { fakeDocument } from './fakes/document';

jest.mock('@baretheme/fs', () => ({
  readSite: jest.fn(),
  readDocumentByFileName: jest.fn(),
}));

beforeEach(() => {
  readSite.mockClear();
  readDocumentByFileName.mockClear();
});

describe('getDocumentBySlug', () => {
  it('returns the right version', () => {
    const site = fakeSite();
    const document = fakeDocument();
    readSite.mockResolvedValueOnce(site);
    readDocumentByFileName.mockResolvedValueOnce(document);
    expect(getDocumentBySlug('/')).toEqual('german version');
  });
});
