import { increment } from '../features/counter/counterSlice';
import { getMiddleware, setupStore } from './store';

describe('setup store', () => {
  it('should setup the store', () => {
    const store = setupStore();
    store.dispatch(increment());
    expect(store.getState().counter.value).toEqual(1);
  });

  it('should setup the store with preloaded state', () => {
    const store = setupStore({ counter: { value: 3 } });
    expect(store.getState().counter.value).toEqual(3);
  });

  describe('getMiddleware function', () => {
    const originalEnv = process.env;

    describe.each`
      nodeEnv          | expectedMiddlewareLength
      ${'production'}  | ${0}
      ${'development'} | ${1}
      ${'test'}        | ${0}
    `('when process.env.NODE_ENV="$nodeEnv"', ({ nodeEnv, expectedMiddlewareLength }) => {
      beforeEach(() => {
        jest.resetModules(); // Most important - it clears the cache
        process.env = {
          ...originalEnv,
          NODE_ENV: nodeEnv,
        };
      });

      afterEach(() => {
        process.env = originalEnv;
      });

      it(`should return "${expectedMiddlewareLength}"`, () => {
        expect(getMiddleware(nodeEnv).length).toEqual(expectedMiddlewareLength);
      });
    });
  });
});
