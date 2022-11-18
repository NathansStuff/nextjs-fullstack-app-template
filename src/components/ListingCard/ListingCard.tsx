import { HeartIcon } from '@components/HeartIcon';
import Image from 'next/image';
import Link from 'next/link';
import { CurrencyFormatter } from 'src/utils/textFormat/textFormatHelper';
export interface IListingCard {
  image: string;
  title: string;
  subtitle: string;
  price: number;
  weeklyRepayment: number;
  favorite: boolean;
  onHeartClick: () => void;
  url: string;
}

export function ListingCard({
  image,
  title,
  subtitle,
  price,
  weeklyRepayment,
  favorite,
  onHeartClick,
  url,
}: IListingCard): JSX.Element {
  return (
    <Link href={url}>
      <div
        data-testid='listingCard'
        className='w-80 h-72 rounded-lg border shadow-lg hover:cursor-pointer overflow-hidden hover:transition-transform hover:scale-105'
      >
        <Image src={image} alt={title} width={320} height={173} />
        <div className='px-5 text-primary flex flex-col space-y-4'>
          <div className='flex flex-col'>
            <h1 className='font-bold'>{title}</h1>
            <p className='text-xs '>{subtitle}</p>
          </div>
          <div className='flex justify-between relative'>
            <div className='group relative w-full'>
              <p className='font-bold'>{CurrencyFormatter(price)}</p>
              <p className='text-xs text-secondary'>
                est <span className='font-bold'>${weeklyRepayment}/wk*</span>
              </p>
              <div className='hidden text-xs absolute bg-primary text-white rounded py-1 px-2 bottom-10 group-hover:flex'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis mi.</p>
                <div className='tooltip-arrow group-hover:flex hidden absolute top-9' />
              </div>
            </div>
            <div className='absolute bottom-0 right-0'>
              <HeartIcon favorite={favorite} onClick={onHeartClick} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
