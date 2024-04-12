import styles from './Cart.module.scss';

import PhoneForm from "../PhoneForm/PhoneForm";
import ProductsInCart from '../ProductsInCart/ProductsInCart';

export default function Cart() {
  return (
    <section className={styles.cart}>
      <div className="container">
        <div className={styles.cartWrapper}>
          <ProductsInCart />
          <PhoneForm />
        </div>
      </div>
    </section>
  )
}