import { HeartIcon as OutlineHeart } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeart } from '@heroicons/react/24/solid';
import Image from 'next/image';

export interface ICategoryIcon {
  image: string;
  title: string;
  favorite: boolean;
}

const iconClass = 'relative bottom-36 left-32 w-6 h-6';

export function CategoryIcon({ image, title, favorite }: ICategoryIcon): JSX.Element {
  return (
    <div data-testid='categoryIcon' className='flex flex-col absolute'>
      <Image src={image} alt={title} width={120} height={100} data-testid='categoryIconImage' />
      <h1 className='text-2xl text-primary font-bold capitalize'>{title}</h1>
      {favorite ? (
        <SolidHeart className={iconClass} data-testid='categoryIconSolidHeart' />
      ) : (
        <OutlineHeart className={iconClass} data-testid='categoryIconOutlineHeart' />
      )}
    </div>
  );
}
