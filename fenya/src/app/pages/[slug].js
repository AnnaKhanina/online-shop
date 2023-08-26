// import { useRouter } from 'next/router';
// import data from "../../utils/data";

// export default function ProductScreen() {
//     const router = useRouter(); 
//     const { query } = router;
//     const { slug } = query;
//     const product = data.products.find(item => item.slug === slug)
    
//      if(!product) {
//         return (
//             <h1>Product not found</h1>
//         )
//      }

//     return (
//         <div>
//             <h1>{ product.name }</h1>
//         </div>  
//     );
// };
import { withRouter } from 'next/router';
import data from "../../utils/data";

function ProductScreen({ router }) {
    const { query } = router;
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
}

export default withRouter(ProductScreen);






