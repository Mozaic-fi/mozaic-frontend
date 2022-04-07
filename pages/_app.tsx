import Head from 'next/head';
import Layout from '../components/layout/Layout';
import type { AppProps } from 'next/app';

import '../styles/globals.css';
import '../styles/commons.css';
// import '../components/common/nav/Nav.scss';
// import '../components/products/Card.scss';
// import './products.scss';
// import './products/productInDepth.scss';

import { AuthProvider } from '../context/AuthContext';
import { NotificationProvider } from '../context/NotificationContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NotificationProvider>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </NotificationProvider>
      <style jsx global>
        {``}
      </style>
    </>
  );
}

export default MyApp;
