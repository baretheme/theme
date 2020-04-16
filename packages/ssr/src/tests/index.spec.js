import {
  getServerSideProps,
} from '..';

describe('index', () => {
  it('exports all public methods', () => {
    expect(getServerSideProps).toBeDefined();
  });
});
