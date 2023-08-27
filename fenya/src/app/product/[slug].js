import { useRouter } from 'next/router';
// import data from "../../utils/data";

export const metadata = {
    title: 'Product page',
  }

export default function Page() {
    const router = useRouter(); 
    // const { query } = router;
    // const { slug } = query;
    // const product = data.products.find(item => item.slug === slug)
    
    //  if(!product) {
    //     return (
    //         <h1>Product not found</h1>
    //     )
    //  }

    return (
        <div>
            <Layout>
                {/* <h1>{ product.name }</h1> */}
                <h1>{router.query.slug}</h1>
            </Layout>            
        </div>  
    );
};

// import data from "../../utils/data";

// export default (req, res) => {
//   res.status(200).json({ data: req.query.id, brand })
// }

// import { withRouter } from 'next/router';
// import data from "../../utils/data";

// function ProductScreen({ router }) {
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
// }

// export default withRouter(ProductScreen);






