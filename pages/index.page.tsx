// import { Button } from '@components/Button';
import { Combobox } from '@components/Combobox';
// import { Input } from '@components/Input';
import Link from 'next/link';

export default function Home(): JSX.Element {
  // function searchByQuery(query: string): void {
  //   console.log(query);
  // }
  return (
    <div
      data-testid='homepage'
      className='bg-road bg-cover bg-center bg-hero bg-no-repeat bg-fixed md:bg-blue-500 lg:bg-red-500 px-5 py-10'
    >
      {/* Slogan Text */}
      <div>
        <div>
          <p className='font-bold text-white text-2xl'>Search. Choose. Finance.</p>
          <p className='text-white text-lg'>
            Thousands of trucks for sale, all in one place. Find your next truck here.
          </p>
        </div>
      </div>

      {/* Search Card */}
      <div className='bg-white rounded-xl shadow-xl p-5 mt-5 flex flex-col space-y-3'>
        {/* <Input
          placeholder='Type here to search'
          id='home-search-input'
          showErrors={false}
          onChange={(): void => {
            console.log('change');
          }}
        /> */}
        <Combobox placeholder='Search for make' options={[]} />
        <Combobox placeholder='Search for category' options={[]} />
        {/* <Button
          onClick={(): void => {
            console.log('click');
          }}
        >
          Search All Trucks
        </Button> */}
        <div className='text-center'>
          <Link href='/finance'>
            <p className='text-sm underline text-primary'>Need finance?</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
