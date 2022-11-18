export interface ICarousel {
  items: JSX.Element[];
}

export function Carousel({ items }: ICarousel): JSX.Element {
  return (
    <div data-testid='carousel' className='carousel carousel-center max-w-md p-4 space-x-4 rounded-box'>
      {items.map((item, index) => (
        <div key={index} data-testid='carouselItem' className='carousel-item'>
          {item}
        </div>
      ))}
    </div>
  );
}
