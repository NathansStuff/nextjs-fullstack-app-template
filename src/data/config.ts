import assert from 'assert';
// Note: Tried and failed to make this a function. Known issue of unable to access .env[key] dynamically makes this impossible.
// https://stackoverflow.com/questions/64152943/cant-access-process-env-values-using-dynamic-keys

assert.ok(
  process.env.NEXT_PUBLIC_APP_ENV,
  'NEXT_PUBLIC_APP_ENV is not defined'
);
export const NEXT_PUBLIC_APP_ENV: string = process.env.NEXT_PUBLIC_APP_ENV;

// Note: NODE_ENV is protected by NextJS and cannot be overwritten.
assert.ok(process.env.NODE_ENV, 'NODE_ENV is not defined');
export const NODE_ENV = process.env.NODE_ENV;
