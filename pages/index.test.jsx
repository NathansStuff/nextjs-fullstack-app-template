import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/context/store';
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
