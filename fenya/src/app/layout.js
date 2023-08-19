import React from 'react';
import './input.css';
import Head from 'next/head';

export default function Layout({ children, metadata }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title ? metadata.title + ' Fenya' : 'Fenya'}</title>
        <meta name="description" content={metadata.description || 'Default description'} />
        {/* Дополнительные мета-теги, стили и другие */}
      </Head>
      <body>{children}</body>
    </html>
  );
}