import { HeartIcon as OutlineHeart } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeart } from '@heroicons/react/24/solid';

export interface IHeartIcon {
  favorite: boolean;
  onClick: () => void;
}

export function HeartIcon({ favorite, onClick }: IHeartIcon): JSX.Element {
  const iconClass = 'w-6 h-6 hover:cursor-pointer hover:transform hover:scale-125';

  if (favorite) {
    return <SolidHeart className={iconClass} data-testid='categoryIconSolidHeart' onClick={onClick} />;
  }

  return <OutlineHeart className={iconClass} data-testid='categoryIconOutlineHeart' onClick={onClick} />;
}
