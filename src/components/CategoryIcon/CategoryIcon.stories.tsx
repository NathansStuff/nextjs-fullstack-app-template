import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CategoryIcon, ICategoryIcon } from './CategoryIcon';
import { mockCategoryIconProps, mockFavCategoryIconProps } from './CategoryIcon.mocks';

export default {
  title: 'components/CategoryIcon',
  component: CategoryIcon,
  argTypes: {},
} as ComponentMeta<typeof CategoryIcon>;

const Template: ComponentStory<typeof CategoryIcon> = (args) => <CategoryIcon {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockCategoryIconProps,
} as ICategoryIcon;

export const Favourite = Template.bind({});

Favourite.args = {
  ...mockFavCategoryIconProps,
} as ICategoryIcon;
