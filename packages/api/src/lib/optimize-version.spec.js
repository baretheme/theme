import { createVersion } from '@baretheme/test-utils';
import { optimizeVersion } from './optimize-version';

describe('optimizeVersion', () => {
  it('removes $ properties', () => {
    const mockVersion = createVersion({ $url: 'test' });
    const optimized = optimizeVersion(mockVersion);
    expect(optimized).not.toHaveProperty('$url');
  });

  it('removes null properties', () => {
    const mockVersion = createVersion({ foo: null });
    const optimized = optimizeVersion(mockVersion);
    expect(optimized).not.toHaveProperty('foo');
  });
});
