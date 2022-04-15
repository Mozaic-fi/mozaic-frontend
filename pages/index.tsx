import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/products/Card';
import styles from '../styles/Home.module.css';

import { products as productData, Product } from '../data/HomeData';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    setProducts(productData);
  }, [productData]);

  return (
    <>
      <Head>
        <title>Mozaic</title>
        <meta name='description' content='Mozaic dapp' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div className='container'>
        <div className='page-title'>
          <h1 className='pt-t'>Products</h1>
        </div>

        <div className='card-container'>
          {products &&
            products.map((product) => <Card {...product} key={product.id} />)}
        </div>
      </div>

      <style jsx>
        {`
          .card-container {
            margin-top: 64px;
            margin-bottom: 64px;
            justify-content: center;
            width: 100%;
            display: flex;
            flex-direction: row;
            gap: 60px 30px;
            flex-wrap: wrap;
          }
        `}
      </style>
    </>
  );
};

export default Home;
