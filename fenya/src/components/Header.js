import * as React from 'react';
import Link from 'next/link';

export function Header() {
    return (
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
    );
};