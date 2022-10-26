import { Switch as HUISwitch } from '@headlessui/react';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISwitch {}

export function Switch({}: ISwitch): JSX.Element {
  const [enabled, setEnabled] = useState(false);

  return (
    <HUISwitch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
      data-testid="switch"
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </HUISwitch>
  );
}
