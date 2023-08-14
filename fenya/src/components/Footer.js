import * as React from 'react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="flex h-10 items-center shadow-inner justify-center bg-gray-100">
            <ul role="list" className="list-none flex">
                <li className="mx-2 text-lg p-2 hover:text-purple-600 focus:text-purple-600">
                    <Link href="/contacts">
                        Наші контакти
                    </Link>
                </li>                
                <li className="mx-2 text-lg p-2 hover:text-purple-600 focus:text-purple-600">
                    <Link href="/delivery">
                        Доставка і оплата
                    </Link>
                </li>
                <li className="mx-2 text-lg p-2 hover:text-purple-600 focus:text-purple-600">
                    <Link href="/usesite">
                        Умови користування сайтом
                    </Link>
                </li>
                <li className="mx-2 text-lg p-2 hover:text-purple-600 focus:text-purple-600">
                    <Link href="/offering">
                        Договір публічної оферти та політика конфиденційності
                    </Link>
                </li>
                <li className="mx-2 text-lg p-2 hover:text-purple-600 focus:text-purple-600">
                    <Link href="/blog">
                        Blog: LadyNaLike
                    </Link>
                </li>                             
            </ul>             
        </footer>
    );
};
