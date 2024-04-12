import styles from './ProductList.module.scss';

import { fetchProducts } from "@/api/products/products"
import { IProduct } from "@/interfaces/products";
import Product from "../Product/Product";

export default async function ProductsList() {

  const { products } = await fetchProducts(1);

  return (
    <section className={styles.products}>
      <div className="container">
        <div className={styles.productsWrapper}>
          {products && products.map((item: IProduct) => (
            <Product key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  )
}