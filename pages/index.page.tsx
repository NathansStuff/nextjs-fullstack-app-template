import { Toggle } from '@components/Switch';
import { BaseTemplate } from '@components/templates';
import { useAppSelector } from 'src/context/storeHooks';
import Counter from 'src/features/counter/Counter';
import { selectCount } from 'src/features/counter/counterSlice';

export default function Home(): JSX.Element {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector(selectCount);
  return (
    <Toggle/>
  );
}
