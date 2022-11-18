import Image from 'next/image';
import { ICarousel } from './Carousel';

const image = (
  <Image alt='test' key={1} src='https://placeimg.com/250/180/arch' className='rounded-box' height={200} width={200} />
);

export const mockCarouselProps: ICarousel = {
  items: [image, image, image, image, image],
};
