import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListingCard, IListingCard } from './ListingCard';
import { mockListingCardProps } from './ListingCard.mocks';

export default {
  title: 'components/ListingCard',
  component: ListingCard,
  argTypes: {},
} as ComponentMeta<typeof ListingCard>;

const Template: ComponentStory<typeof ListingCard> = (args) => <ListingCard {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockListingCardProps,
} as IListingCard;
