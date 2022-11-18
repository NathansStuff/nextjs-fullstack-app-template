import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Carousel, ICarousel } from './Carousel';
import { mockCarouselProps } from './Carousel.mocks';

export default {
  title: 'components/Carousel',
  component: Carousel,
  argTypes: {},
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockCarouselProps,
} as ICarousel;
