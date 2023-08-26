import * as React from 'react';
import { Main } from './Main';

export default function Layout() {
    return (
        <div className="flex min-h-screen flex-col justify-between">           
            <Main />         
        </div>
    );
};