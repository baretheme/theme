import { stripTrailingSlash } from './strip-trailing-slash';

describe('stripTrailingSlash', () => {
  it('removes all trailing slashes in string', () => {
    expect(stripTrailingSlash('/blog/')).toEqual('/blog');
    expect(stripTrailingSlash('/de/blog//')).toEqual('/de/blog');
  });

  it('removes multiple trailing slashes', () => {
    expect(stripTrailingSlash('/blog//')).toEqual('/blog');
    expect(stripTrailingSlash('/blog///')).toEqual('/blog');
  });

  it('does not touch leading slashes', () => {
    expect(stripTrailingSlash('/')).toEqual('/');
    expect(stripTrailingSlash('/blog')).toEqual('/blog');
    expect(stripTrailingSlash('//blog')).toEqual('//blog');
  });
});
