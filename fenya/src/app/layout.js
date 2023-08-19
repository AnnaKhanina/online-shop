// import './input.css';

// export const metadata = {
//   title: 'Fenya',
//   description: 'online-shopping',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }

// import React from 'react';
// import Head from 'next/head';
// import './input.css';

// export const metadata = {
//   title: 'Fenya',
//   description: 'online-shopping',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <Head>
//         <title>{metadata.title ? metadata.title + ' Fenya' : 'Fenya'}</title>
//         <meta name="description" content={metadata.description || 'Default description'} />
//         {/* Дополнительные мета-теги, стили и другие */}
//       </Head>
//       <body>{children}</body>
//     </html>
//   );
// }

import React from 'react';
import Head from 'next/head';
import './input.css';

export default function RootLayout({ title, description, children }) {
  const fullTitle = title ? `${title} Fenya` : 'Fenya';

  return (
    <html lang="en">
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description || 'Default description'} />
        {/* Дополнительные мета-теги, стили и другие */}
      </Head>
      <body>{children}</body>
    </html>
  );
}
