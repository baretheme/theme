import { existsSync } from 'fs-extra';
import { CONFIG_PATH } from '../constants';
import { setup } from './setup';

const { writeJson } = require('../lib/write-json');

jest.mock('fs-extra', () => ({
  existsSync: jest.fn(),
}));

jest.mock('../lib/write-json', () => ({
  writeJson: jest.fn(),
}));

beforeEach(() => {
  existsSync.mockClear();
  writeJson.mockClear();
});

describe('setup', () => {
  it('complains if there is no content', () => {
    existsSync.mockReturnValue(false);
    expect(() => setup()).toThrow();
  });

  it('saves the defaults', () => {
    existsSync.mockReturnValue(true);
    setup();
    expect(writeJson).toHaveBeenCalledTimes(1);
    expect(writeJson).toHaveBeenCalledWith(CONFIG_PATH, {
      contentPath: expect.any(String),
      documentsPath: expect.any(String),
      dataPath: expect.any(String),
    });
  });

  it('saves the options passed', () => {
    existsSync.mockReturnValue(true);
    setup({
      content: 'foo',
    });
    expect(writeJson).toHaveBeenCalledTimes(1);
    expect(writeJson.mock.calls[0][1].contentPath).toContain('foo');
  });
});
