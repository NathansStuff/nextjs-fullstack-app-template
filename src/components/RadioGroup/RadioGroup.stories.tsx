import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IRadioGroup, RadioGroup } from './RadioGroup';
import { mockRadioGroupProps } from './RadioGroup.mocks';

export default {
  title: 'templates/RadioGroup',
  component: RadioGroup,
  argTypes: {},
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockRadioGroupProps,
} as IRadioGroup;

export const InitialValue = Template.bind({});
InitialValue.args = {
  ...mockRadioGroupProps,
  initialValue: 0,
} as IRadioGroup;
