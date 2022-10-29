import { render, screen } from '@testing-library/react';
import { Input } from './Input';
import { mockInputProps } from './Input.mocks';

describe('BaseTemplate', () => {
  beforeEach(() => {
    render(<Input {...mockInputProps} />);
  });

  it('renders without errors', () => {
    expect(screen.getByTestId('baseTemplate')).toBeInTheDocument();
  });

  it('displays the passed value', () => {
    expect(screen.getByRole('heading')).toHaveTextContent(mockInputProps.sampleTextProp);
  });
});
