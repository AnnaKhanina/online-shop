
import Head from 'next/head';
import './input.css';


export default function RootLayout({ title, children }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <title>{title ? title + 'Fenya':'Fenya'}</title>
          <meta name='description' content="online-shopping" />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        
        {children}
      </body>
    </html>
  );
}
