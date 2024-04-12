'use client';

import styles from './ProductsInCart.module.scss';

import CartProduct from '../CartProduct/CartProduct';
import type { RootState } from '@/app/redux/store';
import { IProduct } from '@/interfaces/products';
import { useSelector } from 'react-redux';

export default function ProductsInCart() {
  const products = useSelector((state: RootState) => state.products.productsInCart);
  console.log(products);

  return (
    <div className={styles.productsInCart}>
      <h2 className={styles.productsInCartTitle}>Добавленные товары</h2>
      <div className={styles.productsInCartWrapper}>

        {products.length && products.map(item => (
          <CartProduct key={item.product.id} data={item} />
        ))}
      </div>
    </div>
  )
}