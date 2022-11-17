export interface ICategory {
  id: number;
  title: string;
  image: string;
}

export const CATEGORIES: ICategory[] = [
  { id: 1, title: 'pantech truck', image: '/img/pantech' },
  { id: 2, title: 'tray truck', image: '/img/traytruck' },
  { id: 3, title: 'tipper', image: '/img/tipper' },
  { id: 4, title: 'prime mover', image: '/img/primemover' },
  { id: 5, title: 'trailer', image: '/img/trailer' },
  { id: 6, title: 'utility', image: '/img/utility' },
  { id: 7, title: 'van', image: '/img/van' },
  { id: 8, title: 'crane', image: '/img/crane' },
];
