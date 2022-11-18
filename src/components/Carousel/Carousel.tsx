export interface ICarousel {
  items: JSX.Element[];
}

/**
 * Creates a carousel component. This component is used to display a list of items in a carousel format. No controls, no button indicator. Freely goes left/right.
 *
 * @param {JSX.Element[]} items: JSX.Element[] - Required - The items to display in the carousel.
 *
 * @comment items to be passed as a prop, not as children. Each child has to have a certain className to work properly.
 *
 * @returns {JSX.Element} - Carousel component
 *
 * @example <Carousel items={[<div key={1} />, <div key={2} />]} />
 *
 * @author Nathan
 * @date 18-11-2022
 * @version 1.0
 */
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
