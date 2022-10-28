// Note: Known issue of unable to access .env[key] dynamically unless you setup next.config.js for each env
// https://stackoverflow.com/questions/64152943/cant-access-process-env-values-using-dynamic-keys

import assert from 'assert';

export function getEnv(key: string): string {
  const value = process.env[key];
  assert(value, `Missing environment variable: ${key}`);
  return value;
}
