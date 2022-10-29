import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Provider } from 'react-redux';
import { store } from '../src/context/store';
import '../src/styles/globals.css';

const customViewports = {
  vroom: {
    name: 'VROOM 1.8 Ratio',
    styles: {
      width: '400px',
      height: '720px',
    },
  },
};

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...customViewports,
    },
    defaultViewport: 'vroom',
  },
  backgrounds: {
    default: 'vroom',
    values: [
      {
        name: 'light',
        value: '#F7F7F7',
      },
      {
        name: 'dark',
        value: '#000000',
      },
    ],
  },
};
