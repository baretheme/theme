import { stripSlashes } from './strip-slashes';

describe('stripSlashes', () => {
  it('removes all slashes in string', () => {
    expect(stripSlashes('/blog')).toEqual('blog');
    expect(stripSlashes('/')).toEqual('');
    expect(stripSlashes('/de/blog')).toEqual('deblog');
    expect(stripSlashes('')).toEqual('');
  });
});
