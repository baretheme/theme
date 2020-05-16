import { removeFromFilename } from './remove-from-filename';

describe('removeFromFilename', () => {
  it('removes the matching part from a filename', () => {
    expect(removeFromFilename('/de/blog', 'de')).toEqual('blog');
  });

  it('removes all matching parts from a filename', () => {
    expect(removeFromFilename('/de/de/blog', 'de')).toEqual('blog');
  });

  it('returns null if everything is removed', () => {
    expect(removeFromFilename('/de', 'de')).toEqual(null);
  });
});
