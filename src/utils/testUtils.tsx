import { configureStore } from '@reduxjs/toolkit';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';

import counterReducer from '../features/counter/counterSlice';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function reducer(
  ui: JSX.Element,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        counter: counterReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { reducer };
