import * as React from 'react';
import { useRouter } from 'next/router';
import data from "../../utils/data";

export default function ProductScreen() {
    const { query } = useRouter();
    const { slug } = query;
    const product = data.products.find(item => item.slug === slug)
     if(!product) {
        return (
            <h1>Product not found</h1>
        )
     }

    return (
        <div>
            <h1>{ product.name }</h1>
        </div>  
    );
};