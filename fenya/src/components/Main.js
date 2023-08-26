import data from '../utils/data';
import { ProductItem } from './ProductItem';

export function Main() {
    return (
        <main className="container mx-auto p-10 px-10 m-10 bg-slate-50 w-100 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 ">
            {data.products.map((product)=>(
                <ProductItem
                    product={product}
                    key={product.slug}
                ></ProductItem>
            ))}
        </div>
    </main>
    );
};
