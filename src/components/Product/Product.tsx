'use client'

import styles from './Product.module.scss';

import { IProduct } from "@/interfaces/products"
import Image from "next/image";
import { useState } from 'react';
import ChangeProductQuantity from '../ChangeProductQuantity/ChangeProductQuantity';


interface Props {
  data: IProduct;
}

export default function Product({ data }: Props) {

  const [buy, setBuy] = useState<boolean>(false);

  return (
    <div className={styles.product}>
      <div className={styles.productImgBox}>
        <Image
          className={styles.productImg}
          loader={() => data.image_url}
          width={200}
          height={200}
          src={`${data.image_url}`}
          alt={data.title}
        />
      </div>
      <h3 className={styles.productTitle}>{data.title}</h3>
      <p className={styles.productDescr}>{data.description}</p>
      <span className={styles.productPrice}>{data.price}</span>
      {buy ? <ChangeProductQuantity /> : <button onClick={() => setBuy(true)} className={styles.productBtn}>купить</button>}
    </div>
  )
}