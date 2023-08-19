import * as React from 'react';
import Head from 'next/head';
import { Header } from './Header';

import { Footer } from './Footer';

function generateMetadata(title) {
    return {
      title: title ? `${title} - Fenya` : 'Fenya', // Добавляем " - Fenya" к title
      description: 'Білизна', // Здесь может быть ваше описание
    };
  }

  export default function Layout({ title, children }) {   
    const metadata = generateMetadata(title);

    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                {/* Дополнительные мета-теги, стили и другие */}
            </Head>
            <div className="flex min-h-screen flex-col justify-between">
                <Header />
              <main>{ children }</main>
                <Footer />
            </div>
        </>        
    );
}