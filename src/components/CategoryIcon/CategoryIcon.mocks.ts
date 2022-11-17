import { ICategoryIcon } from './CategoryIcon';

export const mockCategoryIconProps: ICategoryIcon = {
  image: '/img/pantech.svg',
  title: 'pantech truck',
  favorite: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHeartClick: () => {},
};

export const mockFavCategoryIconProps: ICategoryIcon = {
  image: '/img/pantech.svg',
  title: 'pantech truck',
  favorite: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHeartClick: () => {},
};
