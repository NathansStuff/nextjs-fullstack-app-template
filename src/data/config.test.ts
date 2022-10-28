import { NEXT_PUBLIC_APP_ENV, NEXT_PUBLIC_NODE_ENV, NODE_ENV } from './config';

describe('the constants in config.ts', () => {
  it('should be defined', () => {
    expect(NEXT_PUBLIC_APP_ENV).toBeDefined();
    expect(NEXT_PUBLIC_NODE_ENV).toBeDefined();
    expect(NODE_ENV).toBeDefined();
  });
});
