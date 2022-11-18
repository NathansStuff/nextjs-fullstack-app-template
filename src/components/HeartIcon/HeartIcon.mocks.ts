import { IHeartIcon } from './HeartIcon';

export const mockFavHeartIconProps: IHeartIcon = {
  favorite: true,
  onClick: () => console.log('clicked'),
};

export const mockNotFavHeartIconProps: IHeartIcon = {
  favorite: false,
  onClick: () => console.log('clicked'),
};
