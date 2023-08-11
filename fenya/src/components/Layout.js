import * as React from 'react';
import Link from 'next/link';
import data from '../utils/data';

export default function Layout() {
    return (
        <div className="flex min-h-screen flex-col justify-between">
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
            <main className="container px-4 ">
                <div className="grid grid-cols-1 gap-4 md:grid-cils-3 lg:grid-cols-4">
                    {data.products.map((product)=>(
                        <ProductItem
                            product={product}
                            key={product.slug}
                        ></ProductItem>

                    ))}
                </div>
            </main>
            <footer className="flex h-10 items-center shadow-inner justify-center">
            Footer
            </footer>
        </div>
    )
}