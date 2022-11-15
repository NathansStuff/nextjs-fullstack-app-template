import { act, fireEvent, render, screen } from '@testing-library/react';
import { checkedClass, errorClass, RadioGroup, uncheckedClass } from './RadioGroup';
import { mockRadioGroupProps } from './RadioGroup.mocks';

describe('BaseTemplate', () => {
  const onChange = jest.fn();

  function renderBaseComponent(): void {
    render(<RadioGroup {...mockRadioGroupProps} />);
  }

  function renderSpyComponent(): void {
    render(
      <RadioGroup
        onChange={onChange}
        options={mockRadioGroupProps.options}
        title={mockRadioGroupProps.title}
        showErrors={mockRadioGroupProps.showErrors}
      />
    );
  }

  function clickElement(element: Element | Node | Document | Window): void {
    act(() => {
      fireEvent.click(element);
    });
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without errors', () => {
    // Arrange
    renderBaseComponent();
    // Act
    // Assert
    expect(screen.getByTestId('radioGroup')).toBeInTheDocument();
  });

  it('displays the passed value', () => {
    // Arrange
    renderBaseComponent();
    // Act
    // Assert
    expect(screen.getAllByTestId('radioGroupOptionText')[0]).toHaveTextContent(mockRadioGroupProps.options[0].label);
  });

  it('calls the onChange function when clicked', () => {
    // Arrange
    renderSpyComponent();
    // Act
    clickElement(screen.getAllByTestId('radioGroupOptionText')[0]);
    // Assert
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('calls the onChange function with the correct value of the selected option when clicked', () => {
    // Arrange
    renderSpyComponent();
    // Act
    const index = 0;
    clickElement(screen.getAllByTestId('radioGroupOptionText')[index]);
    // Assert
    expect(onChange).toHaveBeenCalledWith(mockRadioGroupProps.options[index].value);
  });

  it('changes the selected option when clicked', () => {
    // Arrange
    renderBaseComponent();
    // Act
    clickElement(screen.getAllByTestId('radioGroupOptionText')[0]);
    // Assert
    expect(screen.getAllByTestId('radioGroupOptionText')[0]).toHaveClass(checkedClass);
  });

  it('sets no initial selected option when no value is passed', () => {
    // Arrange
    renderBaseComponent();
    // Act
    const option1 = screen.getAllByTestId('radioGroupOptionText')[0];
    const option2 = screen.getAllByTestId('radioGroupOptionText')[1];
    // Assert
    expect(option1).not.toHaveClass(checkedClass);
    expect(option2).not.toHaveClass(checkedClass);
    expect(option1).toHaveClass(uncheckedClass);
    expect(option2).toHaveClass(uncheckedClass);
  });

  it('sets the initial selected option when a value is passed', () => {
    // Arrange
    render(
      <RadioGroup
        onChange={onChange}
        options={mockRadioGroupProps.options}
        title={mockRadioGroupProps.title}
        showErrors={mockRadioGroupProps.showErrors}
        initialValue={0}
      />
    );
    // Act
    // Assert
    expect(screen.getAllByTestId('radioGroupOptionText')[0]).toHaveClass(checkedClass);
  });

  it('shows error class when showErrors is true and no value is selected', () => {
    // Arrange
    render(
      <RadioGroup
        onChange={onChange}
        options={mockRadioGroupProps.options}
        title={mockRadioGroupProps.title}
        showErrors={true}
      />
    );
    // Act
    // Assert
    expect(screen.getAllByTestId('radioGroupOptionCard')[0]).toHaveClass(errorClass);
  });
});
