import { render, screen } from '../src/utils/tests/testUtils';
import Home from './index.page';

describe('Index page', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('renders without errors', () => {
    expect(screen.getByTestId('homepage')).toBeInTheDocument();
  });
});
