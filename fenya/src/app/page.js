import * as React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export const metadata = {
  title: 'Home page',
}

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />    
    </>
  );
}