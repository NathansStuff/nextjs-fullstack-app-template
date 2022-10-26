import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ISwitch, Switch } from './Switch';
import { mockSwitchProps } from './Switch.mocks';

export default {
  title: 'components/Switch',
  component: Switch,
  argTypes: {},
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockSwitchProps,
} as ISwitch;
