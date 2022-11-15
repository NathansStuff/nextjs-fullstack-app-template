import { increment } from '../features/counter/counterSlice';
import { getMiddleware, rootReducer, setupStore } from './store';

describe('setup store', () => {
  it('should setup the store', () => {
    // Arrange
    const store = setupStore();
    // Act
    store.dispatch(increment());
    // Assert
    expect(store.getState().counter.value).toEqual(1);
  });

  it('should setup the store with preloaded state', () => {
    // Arrange
    const store = setupStore({ counter: { value: 3 } });
    // Act
    // Assert
    expect(store.getState().counter.value).toEqual(3);
  });

  describe('rootReducer', () => {
    // Note: This is a dumb test, if you have a more complex test, you should remove this
    it('should return the array of reducers', () => {
      // Arrange
      const reducers = rootReducer;
      // Act
      // Assert
      expect(reducers).toBeTruthy();
    });
  });

  describe('getMiddleware function', () => {
    // Note: This test is only testing that the middleware function works as expected across different environments.
    // It is not testing the middleware itself.

    // Note: If you add or remove middleware, you will need to update this test.

    // Arrange
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

      it(`should return "${expectedMiddlewareLength} middleware added to the store"`, () => {
        // Act
        // Assert
        expect(getMiddleware(nodeEnv).length).toEqual(expectedMiddlewareLength);
      });
    });
  });
});
