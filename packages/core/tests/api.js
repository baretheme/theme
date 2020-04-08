import { getDocumentBySlug } from '../api';
import site from './data/site';
import document from './data/document';

jest.mock('@baretheme/fs', () => ({
  readSite: () => site,
  readDocumentByFileName: () => document,
}));

describe('getDocumentBySlug', () => {
  it('returns the right version', () => {
    expect(getDocumentBySlug()).toEqual('german version');
  });
});
