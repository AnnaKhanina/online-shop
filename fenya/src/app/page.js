import Head from 'next/head';
// import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
      {/* <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center p-4 justify-between shadow-md">
            <Link href="/" className="text-lg font-bold">
              Головна
            </Link>
            <div className="p-1">
              <Link href="/cart" className="text-lg p-2">
                Кошик
              </Link>
              <Link href="/login" className="text-lg p-2">
                Особистий кабінет
              </Link>
            </div>
          </nav>
        </header>
        <main className="container px-4 ">Main</main>
        <footer className="flex h-10 items-center shadow-inner justify-center">
          Footer
        </footer>
      </div> */}
    </>
  );
}
