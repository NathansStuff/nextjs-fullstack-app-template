import { ComponentMeta, ComponentStory } from '@storybook/react';
import Counter from './Counter';

export default {
  title: 'counter/Counter',
  component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = () => <Counter />;

export const Base = Template.bind({});
