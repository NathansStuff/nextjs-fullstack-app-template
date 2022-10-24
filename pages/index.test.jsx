import { Provider } from 'react-redux';
import { store } from '../src/context/store';
import { render, screen } from '../src/utils/tests/testUtils';
import Home from './index.page';

describe('Index page', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it('renders without errors', () => {
    expect(screen.getByTestId('homepage')).toBeInTheDocument();
  });
});
