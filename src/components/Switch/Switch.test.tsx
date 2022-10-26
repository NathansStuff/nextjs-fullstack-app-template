import { render, screen } from '@testing-library/react';
import { Switch } from './Switch';
import { mockSwitchProps } from './Switch.mocks';

describe('BaseTemplate', () => {
  beforeEach(() => {
    render(<Switch {...mockSwitchProps} />);
  });

  it('renders without errors', () => {
    expect(screen.getByTestId('switch')).toBeInTheDocument();
  });
});
