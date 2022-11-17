import { IListingCard } from './ListingCard';

export const mockListingCardProps: IListingCard = {
  image: 'https://picsum.photos/200/300',
  title: '2014 Freightliner Coronado 114',
  subtitle: '540,000km • Manual Transmission',
  price: 115500,
  weeklyRepayment: 146,
  favorite: false,
  onHeartClick: () => console.log('Clicked'),
  url: '/listing/1',
};
