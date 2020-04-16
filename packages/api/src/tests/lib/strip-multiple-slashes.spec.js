import { stripMultipleSlashes } from '../../lib/strip-multiple-slashes';

describe('stripMultipleSlashes', () => {
  it('returns slug without multiple slashes', () => {
    expect(stripMultipleSlashes('/de//blog')).toEqual('/de/blog');
    expect(stripMultipleSlashes('///blog')).toEqual('/blog');
    expect(stripMultipleSlashes('/blog//')).toEqual('/blog/');
  });
});
