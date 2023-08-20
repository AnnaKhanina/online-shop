import './input.css';

export const metadata = {
  title: {
    template: '%s | Fenya',
    default: 'Fenya',
  },
  openGraph: {
    title: 'Fenya',
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
      <body>{children}</body>
    </html>
  );
}