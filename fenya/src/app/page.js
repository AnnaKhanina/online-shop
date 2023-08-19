import React from 'react';
import Layout from './layout'; // Убедитесь, что путь правильный
import Head from 'next/head';


export default function Home() {
  const metadata = {
    title: 'Головна',
    description: 'Описание вашей главной страницы',
  };

  return (
    <Layout metadata={metadata}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        {/* Остальной ваш контент */}
      </div>
      <div className="flex min-h-screen flex-col justify-between">
                <Header />
                <Main />
                <Footer />
            </div>
    </Layout>
  );
}