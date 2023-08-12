import * as React from 'react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="flex h-10 items-center shadow-inner justify-center bg-gray-100">
            <ul role="list" className="list-none flex">
                <li className="mx-2">
                    <Link href="/contacts" className="text-lg p-2 hover:text-purple-600 focus:text-purple-600">
                        Наші контакти
                    </Link>
                </li>                
                <li className="mx-2">
                    <Link href="/delivery" className="text-lg p-2 hover:text-purple-600 focus:text-purple-600">
                        Доставка і оплата
                    </Link>
                </li>
                <li className="mx-2">
                    <Link href="/usesite" className="text-lg p-2 hover:text-purple-600 focus:text-purple-600">
                        Умови користування сайтом
                    </Link>
                </li>
                <li className="mx-2">
                    <Link href="/offering" className="text-lg p-2 hover:text-purple-600 focus:text-purple-600">
                        Договір публічної оферти та політика конфиденційності
                    </Link>
                </li>
                <li className="mx-2">
                    <Link href="/blog" className="text-lg p-2 hover:text-purple-600 focus:text-purple-600">
                        Blog: LadyNaLike
                    </Link>
                </li>                             
            </ul>             
        </footer>
    );
};
