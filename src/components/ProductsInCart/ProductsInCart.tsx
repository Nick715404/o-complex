import styles from './ProductsInCart.module.scss';

import CartProduct from '../CartProduct/CartProduct';

export default function ProductsInCart() {
  return (
    <div className={styles.productsInCart}>
      <h2 className={styles.productsInCartTitle}>Добавленные товары</h2>
      <div className={styles.productsInCartWrapper}>
        {/* <CartProduct /> */}
      </div>
    </div>
  )
}