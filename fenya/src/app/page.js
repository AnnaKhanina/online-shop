import React from 'react';
import RootLayout from './layout'; // Убедитесь, что путь правильный
import Layout from '../components/Layout'; 

export default function Home() {
  const metadata = {
    title: 'Головна',
    description: 'online-shopping',
  };

  return (
    <RootLayout metadata={metadata}>
      <Layout></Layout>
    </RootLayout>
  );
}