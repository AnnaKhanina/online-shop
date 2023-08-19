// import Layout from '../components/Layout';

// export default function Home() {
//   return (
//     <>
//       <Layout title="Головна"></Layout>
//     </>
//   );
// }

import React from 'react';
import RootLayout from '../components/RootLayout';
import Header from '../components/Header';
import Main  from '../components/Main';
import Footer  from '../components/Footer';

export default function Home() {
  return (
    <RootLayout title="Home">
     <div className="flex min-h-screen flex-col justify-between">
        <Header />
        <Main />
        <Footer />
     </div>
    </RootLayout>
  );
}
