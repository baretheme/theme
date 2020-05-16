import { isPublic } from './is-public';

describe('isPublic', () => {
  it('returns true if is not draft', () => {
    const obj = { draft: false };
    expect(isPublic(obj)).toBe(true);
  });

  it('returns false if is draft', () => {
    const obj = { draft: true };
    expect(isPublic(obj)).toBe(false);
  });
});
