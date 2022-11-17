import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Combobox, ICombobox } from './Combobox';
import { mockComboboxProps } from './Combobox.mocks';

export default {
  title: 'components/Combobox',
  component: Combobox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Combobox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Combobox> = (args) => <Combobox {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockComboboxProps,
} as ICombobox;
