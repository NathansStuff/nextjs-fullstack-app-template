import { RadioGroup as HUIRadioGroup } from '@headlessui/react';
import { useState } from 'react';

export interface IRadioGroup {
  title: string;
  options: string[];
  showErrors: boolean;
  initialValue?: number;
  onChange: (value: number) => void;
}
export function RadioGroup({ title, options, initialValue, showErrors, onChange }: IRadioGroup): JSX.Element {
  const [selected, setSelected] = useState<string | null>(initialValue !== undefined ? options[initialValue] : null);

  function haveErrors(): boolean {
    return showErrors && !selected;
  }

  function handleChange(value: string): void {
    setSelected(value);
    onChange(options.indexOf(value));
  }

  return (
    <div data-testid="radioGroup" className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <HUIRadioGroup value={selected} onChange={handleChange} className="w-full">
          <HUIRadioGroup.Label className="font-sans font-bold pb-1" as="p">
            {title}
          </HUIRadioGroup.Label>
          <HUIRadioGroup.Label className="sr-only">{title}</HUIRadioGroup.Label>
          <div className="flex space-x-2 w-full">
            {options.map((option) => (
              // Outside Card
              <HUIRadioGroup.Option
                key={option}
                value={option}
                data-testid="radioGroupOptionCard"
                className={({ active, checked }): string =>
                  `${active ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300' : ''}
                  ${checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'} ${haveErrors() ? errorClass : ''}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none w-full`
                }
              >
                {/* Inner Card */}
                {({ checked }): JSX.Element => (
                  <HUIRadioGroup.Label
                    as="p"
                    data-testid="radioGroupOptionText"
                    className={`font-sans font-bold text-center ${checked ? checkedClass : uncheckedClass}`}
                  >
                    {option}
                  </HUIRadioGroup.Label>
                )}
              </HUIRadioGroup.Option>
            ))}
          </div>
        </HUIRadioGroup>
      </div>
    </div>
  );
}

// For testing purposes, constants and exported instead of being inlined
export const checkedClass = 'text-white';
export const uncheckedClass = 'text-gray-900';
export const errorClass = 'bg-red-500';
