import { relativeURL } from './relative-url';

describe('relativeURL', () => {
  it('should return a url relative to given dir', () => {
    const url = '/de/test';
    expect(relativeURL(url, 'de')).toEqual('test');
  });

  it('returns "index" if given dir is same as url', () => {
    const url = '/de';
    expect(relativeURL(url, 'de')).toEqual('index');
  });
});
