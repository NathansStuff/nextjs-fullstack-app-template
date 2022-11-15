import { Combobox as HUICombobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Fragment, useState } from 'react';

export interface ICombobox {
  options: IComboboxOption[];
  placeholder: string;
}

export interface IComboboxOption {
  id: number;
  value: string;
}

export function Combobox({ options, placeholder }: ICombobox): JSX.Element {
  const [selected, setSelected] = useState<IComboboxOption | ''>('');
  const [query, setQuery] = useState('');

  const filteredOptions =
    query === ''
      ? options
      : options.filter((person) =>
          person.value.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className='fixed top-16 w-72'>
      <HUICombobox value={selected} onChange={setSelected} data-testid='combobox'>
        <div className='relative mt-1'>
          <div className='relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm'>
            <HUICombobox.Input
              className='w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0'
              displayValue={(option: IComboboxOption): string => option?.value ?? ''}
              placeholder={placeholder}
              data-testid='combobox-input'
              onChange={(event): void => setQuery(event.target.value)}
            />
            <HUICombobox.Button
              data-testid='combobox-button'
              className='absolute inset-y-0 right-0 flex items-center pr-2'
            >
              <ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
            </HUICombobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <HUICombobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {filteredOptions.length === 0 && query !== '' ? (
                <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>Nothing found.</div>
              ) : (
                filteredOptions.map((option) => (
                  <HUICombobox.Option
                    data-testid='combobox-option'
                    key={option.id}
                    className={({ active }): string =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={option}
                  >
                    {({ selected, active }): JSX.Element => (
                      <>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                          {option.value}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </HUICombobox.Option>
                ))
              )}
            </HUICombobox.Options>
          </Transition>
        </div>
      </HUICombobox>
    </div>
  );
}
