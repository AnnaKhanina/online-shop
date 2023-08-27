import React from 'react';
import data from '../../data'; // Путь к вашему data.js файлу

function ProductPage({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Brand: {product.brand}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = data.products.map((product) => ({
    params: { slug: product.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const product = data.products.find((product) => product.slug === slug);

  return { props: { product } };
}

export default ProductPage;





