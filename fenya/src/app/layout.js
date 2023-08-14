import Head from 'next/head';

export const metadata = {
  title: 'Fenya',
  description: 'online-shopping',
};

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
