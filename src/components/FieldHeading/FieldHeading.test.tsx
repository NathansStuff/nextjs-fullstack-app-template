import { render, screen } from '@testing-library/react';
import { FieldHeading } from './FieldHeading';
import { mockFieldHeadingProps } from './FieldHeading.mocks';

describe('BaseTemplate', () => {
  beforeEach(() => {
    render(<FieldHeading {...mockFieldHeadingProps} />);
  });

  it('renders without errors', () => {
    expect(screen.getByTestId('fieldHeading')).toBeInTheDocument();
  });

  it('displays the passed value', () => {
    expect(screen.getByText(mockFieldHeadingProps.title)).toBeInTheDocument();
  });
});
