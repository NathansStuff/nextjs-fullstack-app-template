import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Combobox } from './Combobox';
import { mockComboboxProps } from './Combobox.mocks';

describe('Combobox', () => {
  beforeEach(() => {
    render(
      <div data-testid='container'>
        <Combobox {...mockComboboxProps} />
      </div>
    );
  });

  function clickByTestId(testid: string): void {
    act(() => {
      fireEvent.click(screen.getByTestId(testid));
    });
  }

  it('renders without errors', () => {
    // Arrange
    // Act
    // Assert
    expect(screen.getByTestId('combobox')).toBeInTheDocument();
  });

  describe('the dropdown', () => {
    it('shows the dropdown when the input is clicked', () => {
      // Arrange
      // Act
      clickByTestId('combobox-button');
      // Assert
      expect(screen.getAllByTestId('combobox-option')[0]).toBeInTheDocument();
    });

    it('closes the dropdown when the input is clicked twice', () => {
      // Arrange
      // Act
      clickByTestId('combobox-button');
      clickByTestId('combobox-button');
      // Assert
      expect(() => {
        screen.getByTestId('combobox-option');
      }).toThrowError(); // Error of not being found in the document
    });
  });

  describe('the input', () => {
    it('shows the placeholder when no value is entered', () => {
      // Arrange
      // Act
      // Assert
      expect(screen.getByTestId('combobox-input')).toHaveAttribute('placeholder', mockComboboxProps.placeholder);
    });

    it('shows the value when a value is entered', () => {
      // Arrange
      // Act
      clickByTestId('combobox-button');
      act(() => {
        fireEvent.click(screen.getAllByTestId('combobox-option')[0]);
      });
      // Assert
      expect(screen.getByTestId('combobox-input')).toHaveValue(mockComboboxProps.options[0].value);
    });

    it('shows the value when a value is entered and the dropdown is closed', () => {
      // Arrange
      // Act
      clickByTestId('combobox-button');
      act(() => {
        fireEvent.click(screen.getAllByTestId('combobox-option')[0]);
      });
      clickByTestId('combobox-button');
      // Assert
      expect(screen.getByTestId('combobox-input')).toHaveValue(mockComboboxProps.options[0].value);
    });

    it('shows nothing found when the value is not found', () => {
      // Arrange
      // Act
      act(() => {
        fireEvent.change(screen.getByTestId('combobox-input'), { target: { value: 'not found' } });
      });
      // Assert
      expect(screen.getByTestId('combobox-input')).toHaveValue('not found');
    });

    it('typing in the input sets the input value', () => {
      // Arrange
      // Act
      act(() => {
        fireEvent.change(screen.getByTestId('combobox-input'), { target: { value: 'test' } });
      });
      // Assert
      expect(screen.getByTestId('combobox-input')).toHaveValue('test');
    });

    it('resets the value after clicking outside the input', () => {
      // Arrange
      // Act
      act(() => {
        fireEvent.change(screen.getByTestId('combobox-input'), { target: { value: 'random search value' } });
      });
      clickByTestId('container');
      // Assert
      waitFor(() => {
        expect(screen.getByTestId('combobox-input')).toHaveValue('');
      });
    });
  });
});
