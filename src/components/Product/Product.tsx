'use client'

import styles from './Product.module.scss';

import { IProduct } from "@/interfaces/products"
import ChangeProductQuantity from '../ChangeProductQuantity/ChangeProductQuantity';
import { useState } from 'react';
import Image from "next/image";
import { useDispatch } from 'react-redux';
import { addProduct } from '@/app/redux/slices/productSlice';

interface Props {
  data: IProduct;
}

export default function Product({ data }: Props) {
  const dispatch = useDispatch();
  const [buy, setBuy] = useState<boolean>(false);

  const handleClick = () => {
    setBuy(true);
    dispatch(addProduct(data));
  }

  return (
    <div className={styles.product}>
      <div className={styles.productContent}>
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
      </div>
      <div className={styles.productBottom}>
        <span className={styles.productPrice}>{`${data.price}$`}</span>
        {buy
          ?
          <ChangeProductQuantity data={data} />
          :
          <button
            onClick={handleClick}
            className={styles.productBtn}
          >
            купить
          </button>
        }
      </div>
    </div>
  )
}