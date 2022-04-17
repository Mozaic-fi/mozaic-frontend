import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

import Head from 'next/head';
import Layout from '../components/layout/Layout';
import type { AppProps } from 'next/app';

import '../styles/commons.css';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/transitions.css';
import { AuthProvider } from '../context/AuthContext';
import { NotificationProvider } from '../context/NotificationContext';

function MyApp({ Component, pageProps }: AppProps) {
  const getLibrary = (provider: any) => {
    const library = new Web3Provider(provider, 'any');
    library.pollingInterval = 15000;
    return library;
  };

  return (
    <>
      <NotificationProvider>
        <Web3ReactProvider getLibrary={getLibrary}>
          <AuthProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthProvider>
        </Web3ReactProvider>
      </NotificationProvider>
      <style jsx global>
        {``}
      </style>
    </>
  );
}

export default MyApp;
