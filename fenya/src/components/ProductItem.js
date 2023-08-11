import * as React from 'react';
import Link from 'next/link';

export function ProductItem({product}) {
    return (
        <div className="card">
            <Link href={'/product/${product.slug}'}>
        
                    <img
                    src={product.image}
                    alt={product.name + product.description}
                    className={'rounded shadow'}
                    />
      
            </Link>
            <div className="flex flex-col justify-center items-center p-5">
                <Link href={'/product/${product.slug}'}>
                    <h2 className="text-lg">{product.name}</h2>
                    <h3>{product.description}</h3>
                    <h3>{product.price}</h3>
                </Link>   
                <button className="primary-button">додати до кошика</button>             
            </div>
        </div>
    )
}