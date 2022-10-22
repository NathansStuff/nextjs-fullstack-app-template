import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './index.page';

describe('Index page', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('renders without errors', () => {
    expect(screen.getByTestId('homepage')).toBeInTheDocument();
  });
});
