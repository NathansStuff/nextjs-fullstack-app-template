import { HeartIcon } from '@components/HeartIcon';
import Image from 'next/image';
import Link from 'next/link';

export interface ICategoryIcon {
  image: string;
  title: string;
  favorite: boolean;
  onHeartClick: () => void;
}

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
      <div className='relative bottom-32 left-16'>
        <HeartIcon favorite={favorite} onClick={onHeartClick} />
      </div>
    </div>
  );
}
