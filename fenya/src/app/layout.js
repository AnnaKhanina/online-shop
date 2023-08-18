import * as React from 'react';
import Head from 'next/head';
import './input.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';

export default function RootLayout({ title, children }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <title>{title ? title + 'Fenya':'Fenya'}</title>
          <meta name='description' content="online-shopping" />
          <link rel='icon' href='/favicon.ico' />
        </Head>
          <div className="flex min-h-screen flex-col justify-between">
              <Header></Header>
              <Main></Main>
              <Footer></Footer>
          </div>
        {children}
      </body>
    </html>
  );
}
