import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { ChangeEvent, useState } from 'react';
import { trimClassname } from 'src/utils';

export interface IInput {
  heading?: string;
  placeholder: string;
  id: string;
  onChange: (value: string) => void;
  showErrors: boolean;
  value?: string;
}

/**
 * Input component
 *
 * @param {string} heading - Optional - Heading of the input field
 * @param {string} placeholder - Required - Placeholder of the input field
 * @param {string} id - Required - Id of the input field
 * @param {function} onChange - Required - Function to be called when input value changes. Takes the new value as a parameter
 * @param {boolean} showErrors - Required - Boolean to show errors
 * @param {string} value - Optional - Value of the input field
 *
 * @returns {JSX.Element} - Input component
 * @example <Input heading="Heading" placeholder="Placeholder" id="id" onChange={(value)=>{}} showErrors={true} />
 *
 * @author Nathen O'Donnell
 * @date 2022-10-30
 * @version 1.0.0
 */
export function Input({ heading, placeholder, id, value, showErrors, onChange }: IInput): JSX.Element {
  function haveErrors(): boolean {
    return showErrors && !value;
  }

  const [inputValue, setInputValue] = useState<string>(value ?? '');

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const { value } = event.target;
    setInputValue(value);
    onChange(value);
  }

  return (
    <div data-testid='input'>
      {heading ? (
        <h1 data-testid='inputHeading' className='fieldHeading px-4'>
          {heading}
        </h1>
      ) : null}
      <div className='relative flex items-center'>
        <input
          className={trimClassname(
            `text-sm appearance-none border-2 rounded-lg w-full p-2 text-primary placeholder-primary leading-tight inputButtonFocus ${
              haveErrors() ? errorClass : null
            }`
          )}
          id={id}
          type='text'
          data-testid='inputField'
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
        />
        <MagnifyingGlassIcon
          className='pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3 fill-primary'
          aria-hidden='true'
        />
      </div>
    </div>
  );
}

export const errorClass = 'error';
