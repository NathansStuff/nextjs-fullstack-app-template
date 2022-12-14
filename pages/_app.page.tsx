import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '../src/styles/globals.css';
import { store } from '../src/context/store';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
