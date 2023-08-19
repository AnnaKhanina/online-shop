import * as React from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';

export default function Layout() {  
    return (
        <>
           <div className="flex min-h-screen flex-col justify-between">
                <Header />
                <Main />
                <Footer />
            </div>
        </>        
    );
}