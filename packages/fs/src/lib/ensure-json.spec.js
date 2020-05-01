import { ensureJson } from './ensure-json';

describe('ensureJson', () => {
  it('should add a json extension', () => {
    expect(ensureJson('file')).toEqual('file.json');
  });

  it('should not touch if extension is json', () => {
    expect(ensureJson('file.json')).toEqual('file.json');
  });

  it('should replace extension if something else', () => {
    expect(ensureJson('file.pdf')).toEqual('file.json');
  });
});
