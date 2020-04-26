import { vol } from 'memfs';
import { createSite } from '@baretheme/test-utils';
import { getSite } from './get-site';

jest.mock('fs');

beforeEach(() => {
  vol.reset();
});

describe('getSite', () => {
  it('gets the site', () => {
    const mockSite = createSite();
    vol.fromJSON({
      './site.json': JSON.stringify(mockSite),
    }, '/data');
    const site = getSite('/data');
    expect(site).toMatchObject(mockSite);
  });
});
