import { render, screen } from '@testing-library/react';
import { Page } from './Page';
import { mockPageProps } from './Page.mocks';

describe('BaseTemplate', () => {
  beforeEach(() => {
    render(<Page {...mockPageProps} />);
  });

  it('renders without errors', () => {
    // Arrange
    // Act
    // Assert
    expect(screen.getByTestId('page')).toBeInTheDocument();
  });

  it('displays the passed children', () => {
    // Arrange
    // Act
    // Assert
    expect(screen.getByTestId('mockChildren')).toBeInTheDocument();
  });
});
