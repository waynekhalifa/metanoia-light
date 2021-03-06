import React from 'react';

import Head from 'next/head';

import slides from 'data/mainSlider';
import categories from 'data/categories';
import { sortby, price } from 'data/filters';

import Layout from 'components/Layout';
import HomeBanner from 'components/HomeBanner';
import ProductList from 'components/ProductList';

function Home() {
  return (
    <>
      <Head>
        <title>Metanoia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <HomeBanner slides={slides} />
        <ProductList categories={categories} sortby={sortby} price={price} />
      </Layout>
    </>
  );
}

export default Home;
