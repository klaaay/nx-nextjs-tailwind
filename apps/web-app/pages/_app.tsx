import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';
import SearchContext from '../context/search';
import TopFeatureContext from '../context/topfeature';

import 'rc-slider/assets/index.css';
import 'react-dropdown-z/build/styles.css';
import 'react-perfect-scrollbar-z/build/styles.css';
import 'react-pagination-z/build/styles.css';

import '../css/styles.css';
import '../css/tailwind.css';
import '../css/index.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to web-app!</title>
      </Head>
      <main className="app">
        <TopFeatureContext>
          <SearchContext>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SearchContext>
        </TopFeatureContext>
      </main>
    </>
  );
}

export default CustomApp;
