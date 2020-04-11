import { readJson } from '../lib/read-json';
import { readAllJson } from '../lib/read-all-json';
import {
  setup,
  getConfig,
  defaults,
  readAllDocuments,
  readDocument,
  readNavigation,
  readSite,
} from '../index';

jest.mock('../lib/read-json', () => ({
  readJson: jest.fn(),
}));

jest.mock('../lib/read-all-json', () => ({
  readAllJson: jest.fn(),
}));

beforeEach(() => {
  readJson.mockClear();
  readAllJson.mockClear();
});

describe('index', () => {
  it('exports setup and config', () => {
    expect(setup).toBeDefined();
    expect(getConfig).toBeDefined();
    expect(defaults).toBeDefined();
  });

  it('exports all public methods', () => {
    expect(readAllDocuments).toBeDefined();
    expect(readDocument).toBeDefined();
    expect(readNavigation).toBeDefined();
    expect(readSite).toBeDefined();
  });

  it('saves the defaults', () => {
    const testProperty = Object.keys(defaults)[0];
    setup();
    expect(getConfig()).toHaveProperty(testProperty, defaults[testProperty]);
  });

  it('saves the setup', () => {
    setup({
      test: 'foo',
    });
    expect(getConfig()).toHaveProperty('test', 'foo');
  });

  it('passes the dataPath to readSite', () => {
    const config = getConfig();
    readSite();
    expect(readJson).toHaveBeenCalledWith(`${config.dataPath}/site`);
  });

  it('passes the dataPath to readNavigation', () => {
    const config = getConfig();
    readNavigation();
    expect(readJson).toHaveBeenCalledWith(`${config.dataPath}/navigation`);
  });

  it('passes the documentPath to readDocument', () => {
    const config = getConfig();
    readDocument('test');
    expect(readJson).toHaveBeenCalledWith(`${config.documentsPath}/test`);
  });

  it('passes the documentPath to readAllDocuments', () => {
    const config = getConfig();
    readAllDocuments();
    expect(readAllJson).toHaveBeenCalledWith(`${config.documentsPath}`);
  });
});
