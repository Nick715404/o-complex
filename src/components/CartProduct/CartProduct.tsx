import Image from 'next/image';
import styles from './CartProduct.module.scss';

import { IProduct } from '@/interfaces/products';

interface Props {
  data: IProduct
}

export default function CartProduct({ data }: Props) {
  return (
    <div className={styles.product}>
      <div className={styles.productImgBox}>
        <Image
          loader={() => data.image_url}
          src={data.image_url}
          alt={data.title}
          width={120}
          height={120}
        />
      </div>
      <div className={styles.productTitle}>
        {data.title}
      </div>
    </div>
  )
}