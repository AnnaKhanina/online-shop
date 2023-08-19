import * as React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Main from '../components/Main';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title={'Home Page'}>
        <Main></Main>
      </Layout>
    </>
  );
}