import Head from 'next/head';
import Layout from '../components/Layout';
import { metadata } from './layout'; // Импортируйте metadata из нужного места

export default function Home() {
  const pageTitle = 'Головна';

  return (
    <>
      <Head>
        <title>{pageTitle} Fenya</title>
        <meta name='description' content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </>
  );
}
