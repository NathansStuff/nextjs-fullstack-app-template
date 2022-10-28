import { getEnv } from './configHelper';

describe('getEnv function', () => {
  const env = process.env;

  beforeEach(() => {
    jest.resetModules(); // Most important - it clears the cache
    process.env = { ...env };
  });

  afterEach(() => {
    process.env = env;
  });

  it('should return the value of the environment variable', () => {
    process.env.TEST = 'test';
    expect(getEnv('TEST')).toEqual('test');
  });

  it('should throw an error if the environment variable is not set', () => {
    expect(() => getEnv('TEST')).toThrowError('Missing environment variable: TEST');
  });

  it('should throw an error if the environment variable is empty', () => {
    process.env.TEST = '';
    expect(() => getEnv('TEST')).toThrowError('Missing environment variable: TEST');
  });

  it('should throw an error if the environment variable is undefined', () => {
    process.env.TEST = undefined;
    expect(() => getEnv('TEST')).toThrowError('Missing environment variable: TEST');
  });
});
