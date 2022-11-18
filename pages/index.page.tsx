import { Button, EButtonType } from '@components/Button';
import { Carousel } from '@components/Carousel';
import { CategoryIcon } from '@components/CategoryIcon';
import { Combobox } from '@components/Combobox';
import { Input } from '@components/Input';
import { ListingCard } from '@components/ListingCard';
import { CheckIcon } from '@heroicons/react/20/solid';
import { HeartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function Home(): JSX.Element {
  function searchByQuery(query: string): void {
    console.log(query);
  }
  function onHeartClick(): void {
    console.log('heart clicked');
  }

  function emptyFunction(): void {
    return;
  }

  const carouselItems = [
    <ListingCard
      key={1}
      image='https://picsum.photos/200/300'
      title='2014 Freightliner Coronado 114'
      subtitle='540,000km • Manual Transmission'
      price={115500}
      weeklyRepayment={146}
      favorite={false}
      onHeartClick={(): void => console.log('Clicked')}
      url='/listing/1'
    />,
    <ListingCard
      key={2}
      image='https://picsum.photos/200/300'
      title='2014 Freightliner Coronado 114'
      subtitle='540,000km • Manual Transmission'
      price={115500}
      weeklyRepayment={146}
      favorite={false}
      onHeartClick={(): void => console.log('Clicked')}
      url='/listing/1'
    />,
  ];
  return (
    <div className='flex flex-col ' data-testid='homepage'>
      {/* Search Section */}
      <div className='bg-road flex justify-center items-center'>
        <div className='w-full px-5 py-10 md:flex md:px-12 md:space-x-5 lg:px-24 md:justify-between lg:max-w-7xl'>
          {/* Slogan Text */}
          <div className='w-full'>
            <p className='font-bold text-white text-2xl md:text-3xl md:pb-5 md:max-w-[16rem]'>
              Search. Choose. Finance.
            </p>
            <p className='text-white text-lg md:max-w-[20rem] lg:max-w-[16rem]'>
              Thousands of trucks for sale, all in one place. Find your next truck here.
            </p>
          </div>

          {/* Search Card */}
          <div className='bg-white rounded-xl shadow-xl p-5 mt-5 flex flex-col space-y-3 md:max-w-sm w-full md:m-0 md:z-10'>
            <Input
              placeholder='Type here to search'
              id='home-search-input'
              showErrors={false}
              onChange={emptyFunction}
            />
            <Combobox placeholder='Search for make' options={[]} />
            <Combobox placeholder='Search for category' options={[]} />
            <div>
              <Button onClick={emptyFunction} title='Search All Trucks' />
            </div>
            <div className='text-center'>
              <Link href='/finance'>
                <p className='text-sm underline text-primary pb-2'>Need finance?</p>
              </Link>
            </div>
          </div>
          <div className='h-14 ' />
        </div>
      </div>
      {/* Categories + Hero Image */}
      <div className='pt-20 pb-10 relative'>
        {/* Hero Image */}
        <div className='absolute top-[-7rem] w-full max-w-screen flex justify-center'>
          <div className='relative w-[90%] h-48 md:h-64 lg:h-96 md:right-32 md:bottom-16 lg:bottom-32 lg:right-0'>
            <Image src='/img/herotruck.svg' layout='fill' alt='truck' />
          </div>
        </div>
        {/* Title */}
        <p className='text-primary font-bold text-3xl text-center py-5 lg:pt-24'>Explore by category</p>
        {/* Categories */}
        <div className='flex justify-center items-center'>
          <div className='grid grid-cols-2 gap-x-10 px-10 md:grid-cols-4 max-w-lg md:max-w-3xl'>
            <CategoryIcon title='pantech truck' image='/img/pantech.svg' favorite={false} onHeartClick={onHeartClick} />
            <CategoryIcon title='tray truck' image='/img/traytruck.svg' favorite={false} onHeartClick={onHeartClick} />
            <CategoryIcon title='tipper' image='/img/tipper.svg' favorite={false} onHeartClick={onHeartClick} />
            <CategoryIcon
              title='prime mover'
              image='/img/primemover.svg'
              favorite={false}
              onHeartClick={onHeartClick}
            />
            <CategoryIcon title='trailer' image='/img/trailer.svg' favorite={false} onHeartClick={onHeartClick} />
            <CategoryIcon title='utility' image='/img/utility.svg' favorite={false} onHeartClick={onHeartClick} />
            <CategoryIcon title='van' image='/img/van.svg' favorite={false} onHeartClick={onHeartClick} />
            <CategoryIcon title='crane' image='/img/crane.svg' favorite={false} onHeartClick={onHeartClick} />
          </div>
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
      {/* New Trucks */}
      <div className='py-10'>
        <p className='text-primary font-bold text-3xl text-center'>New trucks everyday</p>
        <Carousel items={carouselItems} />
        <div className='px-10'>
          <Button title='Browse Latest Trucks' onClick={emptyFunction} />
        </div>
      </div>
      {/* Why Create */}
      <div className='bg-tertiary py-10 space-y-5'>
        <p className='text-primary font-bold text-3xl text-center'>Why create an account?</p>
        <div className='flex space-x-2 items-center px-10'>
          <Image src='/img/bell.svg' height={20} width={20} alt='bell' />
          <p className='text-lg'>Save trucks</p>
        </div>
        <div className='flex space-x-2 items-center px-10'>
          <HeartIcon className='h-5 w-5' />
          <p className='text-lg'>Save searches</p>
        </div>
        <div className='flex space-x-2 items-center px-10'>
          <Image src='/img/dollarLocation.svg' height={20} width={20} alt='dollar' />
          <p className='text-lg'>Track your finance</p>
        </div>
        <div className='flex space-x-2 items-center px-10'>
          <Image src='/img/magnifyingGlass.svg' height={20} width={20} alt='magnifying Glass' />
          <p className='text-lg'>Get notifications</p>
        </div>
        <div className='flex space-x-2 items-center px-10'>
          <Image src='/img/speechBubble.svg' height={20} width={20} alt='speech Bubble' />
          <p className='text-lg'>Update your contact preferences</p>
        </div>
        <div className='px-10'>
          <Button onClick={emptyFunction} title='Join' type={EButtonType.OUTLINE} />
        </div>
      </div>
      {/* Instant Finance */}
      <div className='bg-mountains text-white py-16 px-5'>
        <p className='font-bold text-2xl text-center pb-4'>Get your new truck with instant finance pre-approval</p>
        <p className='text-sm font-light pb-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit tortor a semper laoreet. Aliquam erat
          volutpat. Etiam sodales dolor vitae sagittis cursus. Aliquam eu vulputate orci, et consectetur.
        </p>
        <div className='flex space-x-2 items-center px-2'>
          <CheckIcon className='h-6 w-6 text-secondary' />
          <p className='text-lg'>Get instant pre-approval</p>
        </div>
        <div className='flex space-x-2 items-center px-2'>
          <CheckIcon className='h-6 w-6 text-secondary' />
          <p className='text-lg'>Apply 100% online</p>
        </div>
        <div className='flex space-x-2 items-center px-2'>
          <CheckIcon className='h-6 w-6 text-secondary' />
          <p className='text-lg'>No impact on credit score</p>
        </div>
        <div className='flex space-x-2 items-center px-2 pb-5'>
          <CheckIcon className='h-6 w-6 text-secondary' />
          <p className='text-lg'>Get the finance you need, fast</p>
        </div>
        <Button onClick={emptyFunction} title='Get Finance' type={EButtonType.SECONDARY} />
      </div>
      {/* Lenders */}
      <div className='py-10'>
        <p className='text-primary font-bold text-2xl text-center pb-5'>Our trusted lenders</p>
        <div className='grid grid-cols-3 gap-4 px-10'>
          <div>
            <Image
              src='/lenders/westpac.svg'
              alt='westpac'
              width={80}
              height={35}
              style={{ filter: 'grayscale(100%)' }}
            />
          </div>
          <div>
            <Image
              src='/lenders/commbank.svg'
              alt='commonwealth bank'
              width={80}
              height={35}
              style={{ filter: 'grayscale(100%)' }}
            />
          </div>
          <div>
            <Image
              src='/lenders/c1carloans.svg'
              alt='c1 car loans'
              width={80}
              height={35}
              style={{ filter: 'grayscale(100%)' }}
            />
          </div>
          <div>
            <Image
              src='/lenders/pepper.svg'
              alt='pepper'
              width={80}
              height={35}
              style={{ filter: 'grayscale(100%)' }}
            />
          </div>
          <div>
            <Image src='/lenders/racv.svg' alt='racv' width={80} height={35} style={{ filter: 'grayscale(100%)' }} />
          </div>
          <div>
            <Image src='/lenders/wisr.svg' alt='wisr' width={80} height={35} style={{ filter: 'grayscale(100%)' }} />
          </div>
          <div>
            <Image
              src='/lenders/stgeorge.svg'
              alt='st george'
              width={80}
              height={35}
              style={{ filter: 'grayscale(100%)' }}
            />
          </div>
          <div>
            <Image src='/lenders/zip.svg' alt='zip' width={80} height={35} style={{ filter: 'grayscale(100%)' }} />
          </div>
          <div>
            <Image
              src='/lenders/financeone.svg'
              alt='finance one'
              width={80}
              height={35}
              style={{ filter: 'grayscale(100%)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
