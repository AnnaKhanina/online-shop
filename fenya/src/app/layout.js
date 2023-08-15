import Head from 'next/head';
import './input.css';

export const metadata = {
  // title: 'Fenya',
  description: 'online-shopping',
};

export default function RootLayout({ title, children }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <title>{title ? title + ' Fenya' : 'Fenya'}</title>
          <meta name='description' content={metadata.description} />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        {children}
      </body>
    </html>
  );
}
