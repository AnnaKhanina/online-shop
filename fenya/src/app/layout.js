import Head from 'next/head';
import { metadata } from './input.css'; // Импортируйте metadata из нужного места

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <title>{metadata.title} Fenya</title>
          <meta name='description' content={metadata.description} />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        {children}
      </body>
    </html>
  );
}
