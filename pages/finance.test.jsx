import { render, screen } from '../src/utils/tests/testUtils';
import FinancePage from './finance.page';

describe('Finance page', () => {
  beforeEach(() => {
    render(<FinancePage />);
  });

  it('renders without errors', () => {
    expect(screen.getByTestId('financePage')).toBeInTheDocument();
  });
});
