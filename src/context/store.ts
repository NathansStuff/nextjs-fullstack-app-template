import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { NODE_ENV } from 'src/data/constants';
import counterReducer from '../features/counter/counterSlice';

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  counter: counterReducer,
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const middleware: any[] = [];

if (NODE_ENV !== 'production') {
  middleware.push(logger);
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
