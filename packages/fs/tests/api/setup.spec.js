import { DEFAULTS } from '../../constants';
import { setup } from '../../api/setup';
import { getConfig } from '../../api/get-config';

describe('setup', () => {
  it('saves the defaults', () => {
    const testProperty = Object.keys(DEFAULTS)[0];
    setup();
    expect(getConfig()).toHaveProperty(testProperty, DEFAULTS[testProperty]);
  });

  it('saves the setup', () => {
    setup({
      test: 'foo',
    });
    expect(getConfig()).toHaveProperty('test', 'foo');
  });
});
