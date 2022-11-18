import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeartIcon, IHeartIcon } from './HeartIcon';
import { mockFavHeartIconProps, mockNotFavHeartIconProps } from './HeartIcon.mocks';

export default {
  title: 'components/HeartIcon',
  component: HeartIcon,
  argTypes: {},
} as ComponentMeta<typeof HeartIcon>;

const Template: ComponentStory<typeof HeartIcon> = (args) => <HeartIcon {...args} />;

export const Favourite = Template.bind({});
Favourite.args = {
  ...mockFavHeartIconProps,
} as IHeartIcon;

export const NotFavourite = Template.bind({});
NotFavourite.args = {
  ...mockNotFavHeartIconProps,
} as IHeartIcon;
