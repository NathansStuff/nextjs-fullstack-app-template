import { act, fireEvent, render, screen } from '@testing-library/react';
import { HeartIcon } from './HeartIcon';
import { mockFavHeartIconProps } from './HeartIcon.mocks';

describe('BaseTemplate', () => {
  it('renders without errors on favorite', () => {
    // Arrange
    render(<HeartIcon {...mockFavHeartIconProps} />);
    // Act
    // Assert
    expect(screen.getByTestId('categoryIconSolidHeart')).toBeInTheDocument();
  });

  it('renders without errors on not favorite', () => {
    // Arrange
    render(<HeartIcon {...mockFavHeartIconProps} favorite={false} />);
    // Act
    // Assert
    expect(screen.getByTestId('categoryIconOutlineHeart')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    // Arrange
    const onClick = jest.fn();
    render(<HeartIcon {...mockFavHeartIconProps} onClick={onClick} />);
    // Act
    act(() => {
      fireEvent.click(screen.getByTestId('categoryIconSolidHeart'));
    });
    // Assert
    expect(onClick).toHaveBeenCalled();
  });
});
