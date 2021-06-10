import Router from 'next/router';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apollo';

import 'antd/dist/antd.css';
import '../assets/styles/app.scss';
import '../assets/styles/main.scss';
import '../assets/styles/category.scss';
import '../assets/styles/post.scss';
import '../assets/styles/create.scss';

import Layout from 'antd/lib/layout/layout';
import Header from '@components/Header';
import Loader, { startLoading, finishLoading } from '@components/Loader';

Router.events.on('routeChangeStart', startLoading);
Router.events.on('routeChangeComplete', finishLoading);
Router.events.on('routeChangeError', finishLoading);

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <>
      <Head>
        <meta
          name={'viewport'}
          content={
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
          }
        />
      </Head>
      <Loader />
      <Layout className={'app-layout'}>
        <ApolloProvider client={apolloClient}>
          <Header />
          <Component {...pageProps} />
        </ApolloProvider>
      </Layout>
    </>
  );
}
