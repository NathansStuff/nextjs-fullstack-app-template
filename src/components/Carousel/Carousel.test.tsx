import { render, screen } from '@testing-library/react';
import { Carousel } from './Carousel';
import { mockCarouselProps } from './Carousel.mocks';

describe('BaseTemplate', () => {
  beforeEach(() => {
    render(<Carousel {...mockCarouselProps} />);
  });

  it('renders without errors', () => {
    // Arrange
    // Act
    // Assert
    expect(screen.getByTestId('carousel')).toBeInTheDocument();
  });

  it('renders the correct number of items', () => {
    // Arrange
    // Act
    // Assert
    expect(screen.getAllByTestId('carouselItem')).toHaveLength(mockCarouselProps.items.length);
  });
});
