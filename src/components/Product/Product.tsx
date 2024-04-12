'use client'

import styles from './Product.module.scss';

import { IProduct } from "@/interfaces/products"
import ChangeProductQuantity from '../ChangeProductQuantity/ChangeProductQuantity';
import Image from "next/image";

interface Props {
  data: IProduct;
}

export default function Product({ data }: Props) {
  return (
    <div className={styles.product}>
      <div className={styles.productContent}>
        <div className={styles.productImgBox}>
          <Image
            className={styles.productImg}
            priority
            width={200}
            height={200}
            src={`${data.image_url}`}
            alt={data.title}
          />
        </div>
        <h3 className={styles.productTitle}>{data.title}</h3>
        <p className={styles.productDescr}>{data.description}</p>
      </div>
      <div className={styles.productBottom}>
        <span className={styles.productPrice}>{`${data.price}$`}</span>
        <ChangeProductQuantity data={data} />
      </div>
    </div>
  )
}