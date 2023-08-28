import React from 'react';
import { useRouter } from 'next/router';
import data from '../../utils/data';

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Найдите товар на основе slug в массиве данных
  const product = data.products.find((product) => product.slug === slug);

  // Если товар не найден, вы можете показать сообщение об ошибке или перенаправить пользователя на другую страницу

  if (!product) {
    return <div>Товар не найден</div>;
    // Или можно использовать router.replace('/error') для перенаправления на страницу ошибки
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      {/* Отобразите остальную информацию о товаре */}
    </div>
  );
}







