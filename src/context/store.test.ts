import { increment } from '../features/counter/counterSlice';
import { setupStore } from './store';

describe('setup store', () => {
  it('should setup the store', () => {
    const store = setupStore();
    store.dispatch(increment());
    expect(store.getState().counter.value).toEqual(1);
  });
});
