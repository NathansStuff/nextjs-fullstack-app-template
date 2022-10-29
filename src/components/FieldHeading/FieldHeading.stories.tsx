import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FieldHeading, IFieldHeading } from './FieldHeading';
import { mockFieldHeadingProps } from './FieldHeading.mocks';

export default {
  title: 'components/Input',
  component: FieldHeading,
  argTypes: {},
} as ComponentMeta<typeof FieldHeading>;

const Template: ComponentStory<typeof FieldHeading> = (args) => <FieldHeading {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockFieldHeadingProps,
} as IFieldHeading;
