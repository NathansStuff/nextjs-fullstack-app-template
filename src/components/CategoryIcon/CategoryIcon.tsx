import { HeartIcon as OutlineHeart } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeart } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

export interface ICategoryIcon {
  image: string;
  title: string;
  favorite: boolean;
  onHeartClick: () => void;
}

const iconClass = 'relative bottom-32 left-16 w-6 h-6 hover:cursor-pointer hover:transform hover:scale-125';

export function CategoryIcon({ image, title, favorite, onHeartClick }: ICategoryIcon): JSX.Element {
  const searchTerm = title.split(' ').join('+');
  return (
    <div data-testid='categoryIcon' className='flex flex-col justify-center items-center w-full'>
      <Link href={`/category?category=${searchTerm}`}>
        <div className='group text-center w-full'>
          <Image
            src={image}
            alt={title}
            width={120}
            height={100}
            data-testid='categoryIconImage'
            className='group-hover:underline group-hover:cursor-pointer group-hover:transition-transform group-hover:scale-125'
          />
          <p className='text-xl text-primary font-bold capitalize group-hover:underline group-hover:cursor-pointer group-hover:transition-transform group-hover:scale-125 '>
            {title}
          </p>
        </div>
      </Link>
      {favorite ? (
        <SolidHeart className={iconClass} data-testid='categoryIconSolidHeart' onClick={onHeartClick} />
      ) : (
        <OutlineHeart className={iconClass} data-testid='categoryIconOutlineHeart' onClick={onHeartClick} />
      )}
    </div>
  );
}
