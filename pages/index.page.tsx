import { BaseTemplate } from '@components/templates';
import { useAppSelector } from 'src/context/storeHooks';
import Counter from 'src/features/counter/Counter';
import { selectCount } from 'src/features/counter/counterSlice';

export default function Home(): JSX.Element {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector(selectCount);
  return (
    <div
      data-testid="homepage"
      className="bg-pink-500 md:bg-blue-500 lg:bg-red-500"
    >
      <BaseTemplate sampleTextProp="" />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Counter />
      <p>The count is {count}</p>
    </div>
  );
}
