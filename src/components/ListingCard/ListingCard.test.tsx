import { render, screen } from '@testing-library/react';
import { ListingCard } from './ListingCard';
import { mockListingCardProps } from './ListingCard.mocks';

describe('BaseTemplate', () => {
  beforeEach(() => {
    render(<ListingCard {...mockListingCardProps} />);
  });

  it('renders without errors', () => {
    // Arrange
    // Act
    // Assert
    expect(screen.getByTestId('listingCard')).toBeInTheDocument();
  });
});
