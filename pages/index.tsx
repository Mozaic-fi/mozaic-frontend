import type { NextPage } from 'next';
import Head from 'next/head';
import Card from '../components/products/Card';

import { products as productData, Product } from '../data/HomeData';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [products, setProducts] = useState<Product | null>(null);

  useEffect(() => {
    setProducts(productData);
  }, [productData]);

  return (
    <>
      <Head>
        <title>Mozaic - Products</title>
        <meta name='description' content='Mozaic dapp' />
      </Head>
      <div className='container'>
        <div className='page-title'>
          <h1 className='pt-t ml-a mr-a'>Products</h1>
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
