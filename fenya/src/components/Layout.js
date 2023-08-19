// import * as React from 'react';
// import Head from 'next/head';
// import { Header } from './Header';
// import { Main } from './Main';
// import { Footer } from './Footer';

// function generateMetadata(title) {
//   return {
//     title: title ? `${title} - Fenya` : 'Fenya',
//     description: 'інтернет-магазин', 
//   };
// }

// export default function Layout({ title, children }) {   
//     const metadata = generateMetadata(title);

//     return (
//         <>
//             <Head>
//                 <title>{metadata.title}</title>
//                 <meta name="description" content={metadata.description} />                
//             </Head>
//             <div className="flex min-h-screen flex-col justify-between">
//                 <Header />
//                 <Main />
//                 <Footer />
//             </div>
//         </>        
//     );
// }