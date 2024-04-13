import styles from './CartProduct.module.scss';
import Image from 'next/image';

import { ICartProduct } from '@/interfaces/products';

interface Props {
  data: ICartProduct
}

export default function CartProduct({ data }: Props) {

  const { product, price } = data;

  return (
    <div className={styles.product}>
      <div className={styles.productContent}>
        <div className={styles.productImgBox}>
          <Image
            priority
            src={product.image_url}
            alt={product.title}
            width={120}
            height={120}
            className={styles.img}
          />
        </div>
        <div className={styles.productTitle}>
          {product.title}
        </div>
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productQuantity}>
          {`x${data.quantity}`}
        </div>
        <div className={styles.productPrice}>
          {`${price}$`}
        </div>
      </div>
    </div>
  )
}