import Image from 'next/image';

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
    <div data-testid='listingCard' className='w-80 h-72 rounded-lg border shadow-lg'>
      <Image src={image} alt={title} width={320} height={173} />
      <div className='px-5 py-1 text-primary flex flex-col space-y-5'>
        <div className='flex flex-col'>
          <h1 className='font-bold'>{title}</h1>
          <p className='text-sm '>{subtitle}</p>
        </div>
        <div className='flex justify-between'>
          <div>
            <p className='font-bold text-lg'>${price}</p>
            <p className='text-sm text-secondary'>
              est <span className='font-bold'>${weeklyRepayment}/wk*</span>
            </p>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
