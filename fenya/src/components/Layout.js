import * as React from 'react';
import Link from 'next/link';

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
            <main className="container px-4 ">Main</main>
            <footer className="flex h-10 items-center shadow-inner justify-center">
            Footer
            </footer>
        </div>
    )
}