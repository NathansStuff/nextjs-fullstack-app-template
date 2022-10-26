import { getEnvironmentVariable } from './configHelpers';

describe('getEnvironmentVariable helper function', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    process.env = { ...OLD_ENV };
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  it('should return a string for a valid env string', () => {
    process.env = { NODE_ENV: 'test' };
    const value = getEnvironmentVariable('NODE_ENV');
    expect(typeof value).toBe('string');
  });
  it('should throw an error if the env string is not found', () => {
    process.env = { NODE_ENV: 'test' };
    expect(() => {
      getEnvironmentVariable('NOT_FOUND');
    }).toThrow(Error);
  });
});
