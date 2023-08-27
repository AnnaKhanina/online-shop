// import Link from 'next/link';

// export function ProductItem({product}) {
//     return (
//         <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
//             <Link href={'/product/${product.slug}'}>        
//                     <img
//                     src={product.image}
//                     alt={product.name + product.description}
//                     className="shadow w-full"
//                     />
      
//             </Link>
//             <div className="flex flex-col justify-center items-center p-5">
//                 <Link href={'/product/${product.slug}'}>
//                     <h2 className="font-bold text-center text-xl mb-2">{product.name}</h2>
//                     <h3 className="text-center mb-2">{product.description}</h3>
//                     <h3 className="text-center mb-2">{product.price}</h3>
//                 </Link>   
//                 <button type="button" className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md">додати до кошика</button>             
//             </div>
//         </div>
//     )
// }

import { useRouter } from 'next/navigation';

export function ProductItem({ product }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${product.slug}`);
  };

  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
      <div onClick={handleClick}>
        <img
          src={product.image}
          alt={product.name + product.description}
          className="shadow w-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center p-5">
        <div onClick={handleClick}>
          <h2 className="font-bold text-center text-xl mb-2">{product.name}</h2>
          <h3 className="text-center mb-2">{product.description}</h3>
          <h3 className="text-center mb-2">{product.price}</h3>
        </div>
        <button
          type="button"
          className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
}
