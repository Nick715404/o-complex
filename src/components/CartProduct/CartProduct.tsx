import Image from 'next/image';
import styles from './CartProduct.module.scss';

import { ICartProduct, IProduct } from '@/interfaces/products';

interface Props {
  data: ICartProduct
}

export default function CartProduct({ data }: Props) {
  return (
    <div className={styles.product}>
      <div className={styles.productContent}>
        <div className={styles.productImgBox}>
          <Image
            loader={() => data.product.image_url}
            src={data.product.image_url}
            alt={data.product.title}
            width={120}
            height={120}
          />
        </div>
        <div className={styles.productTitle}>
          {data.product.title}
        </div>
      </div>
      <div className={styles.productQuantity}>
        {`x${data.quantity}`}
      </div>
    </div>
  )
}