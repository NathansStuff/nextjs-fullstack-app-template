import { Button } from '@components/Button';
import { CategoryIcon } from '@components/CategoryIcon';
import { Combobox } from '@components/Combobox';
import { Input } from '@components/Input';
import Image from 'next/image';
import Link from 'next/link';

export default function Home(): JSX.Element {
  function searchByQuery(query: string): void {
    console.log(query);
  }
  function onHeartClick(): void {
    console.log('heart clicked');
  }
  return (
    <div className='flex flex-col' data-testid='homepage'>
      {/* Search Section */}
      <div className='bg-road bg-cover bg-center bg-hero bg-no-repeat bg-fixed md:bg-blue-500 lg:bg-red-500 px-5 py-10'>
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
          <Input
            placeholder='Type here to search'
            id='home-search-input'
            showErrors={false}
            onChange={(): void => {
              console.log('change');
            }}
          />
          <Combobox placeholder='Search for make' options={[]} />
          <Combobox placeholder='Search for category' options={[]} />
          <Button
            onClick={(): void => {
              console.log('click');
            }}
          >
            Search All Trucks
          </Button>
          <div className='text-center'>
            <Link href='/finance'>
              <p className='text-sm underline text-primary'>Need finance?</p>
            </Link>
          </div>
        </div>
        <div className='h-20' />
      </div>
      {/* Categories */}
      <div className='pt-24 pb-10'>
        <p className='text-primary font-bold text-3xl text-center py-5'>Explore by category</p>
        <div className='flex w-full'>
          <CategoryIcon title='pantech truck' image='/img/pantech.svg' favorite={false} onHeartClick={onHeartClick} />
          <CategoryIcon title='tray truck' image='/img/traytruck.svg' favorite={false} onHeartClick={onHeartClick} />
        </div>
        <div className='flex w-full'>
          <CategoryIcon title='tipper' image='/img/tipper.svg' favorite={false} onHeartClick={onHeartClick} />
          <CategoryIcon title='prime mover' image='/img/primemover.svg' favorite={false} onHeartClick={onHeartClick} />
        </div>
        <div className='flex w-full'>
          <CategoryIcon title='trailer' image='/img/trailer.svg' favorite={false} onHeartClick={onHeartClick} />
          <CategoryIcon title='utility' image='/img/utility.svg' favorite={false} onHeartClick={onHeartClick} />
        </div>
        <div className='flex w-full'>
          <CategoryIcon title='van' image='/img/van.svg' favorite={false} onHeartClick={onHeartClick} />
          <CategoryIcon title='crane' image='/img/crane.svg' favorite={false} onHeartClick={onHeartClick} />
        </div>
      </div>
      {/* Why Truckstop */}
      <div className='bg-tertiary p-10 space-y-5'>
        <p className='font-bold text-center text-3xl text-primary'>
          Why Truck<span className='text-secondary'>Stop?</span>
        </p>
        <div className='flex space-x-5'>
          <Image src='/img/trucksearchicon.svg' alt='Magnifying glass over a truck image' width={90} height={43} />
          <p className='text-primary font-bold'>Find your perfect truck with all trucks for sale in one place</p>
        </div>
        <div className='flex space-x-5'>
          <Image src='/img/moneytimeicon.svg' alt='Money in hand against a clock' width={90} height={43} />
          <p className='text-primary font-bold'>Instantly qualify for finance with no impact on credit score</p>
        </div>
        <div className='flex space-x-5'>
          <Image src='/img/easycashicon.svg' alt='Phone with finance document' width={60} height={43} />
          <p className='text-primary font-bold w-full'>Easy finance application 100% online</p>
        </div>
      </div>
    </div>
  );
}
