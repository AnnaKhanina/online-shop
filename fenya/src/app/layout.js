import './input.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Fenya',  
  openGraph: {
    title: {
      template: '%s | Fenya',
      default: 'Fenya',
    },
    description: 'online store of underwear and clothes', 
    siteName: 'Fenya',
    locale: 'uk_UA',
    type: 'website',
    //     url: 'https://nextjs.org',
    //     siteName: 'Next.js',
    //     images: [
    //       {
    //         url: 'https://nextjs.org/og.png',
    //         width: 800,
    //         height: 600,
    //       },
    //       {
    //         url: 'https://nextjs.org/og-alt.png',
    //         width: 1800,
    //         height: 1600,
    //         alt: 'My custom alt',
    //       },
    //     ],
  }  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body>{children}</body> */}
      <div className="flex flex-col min-h-screen mx-auto max-w-2xl px-4 pt-8 pb-16">
          <div className="flex-grow">
            <Header />
            <main className="my-0 py-16">{children}</main>
          </div>
          <Footer />
        </div>
    </html>
  );
}