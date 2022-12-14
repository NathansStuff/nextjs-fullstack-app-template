import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Page } from 'src/layouts/templates/Page';
import { Header } from './Header';

export default {
  title: 'components/Header',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = () => (
  <Page>
    <Header />
  </Page>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
