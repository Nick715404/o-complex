'use client';

import styles from './ChangeProductQuantity.module.scss';

import { type RootState } from '@/app/redux/store';

import { IProduct } from '@/interfaces/products';
import { addProduct, removeProduct } from '@/app/redux/slices/productSlice';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

interface Props {
  data: IProduct;
}

export default function ChangeProductQuantity({ data }: Props) {
  const dispatch = useDispatch();
  const cachedData = useSelector((state: RootState) => state.products.productsInCart);
  const currentData = cachedData.find(item => item.product.id === data.id);
  const [quantity, setQuantity] = useState(currentData ? currentData.quantity : 0);

  const handleClick = () => {
    setQuantity(prev => prev + 1);
    dispatch(addProduct({ ...data, quantity: quantity + 1 }));
  }

  const handleUp = () => {
    setQuantity(prev => prev + 1);
    dispatch(addProduct({ ...data, quantity: quantity + 1 }));
  };

  const handleDown = () => {
    if (currentData && currentData.quantity > 0) {
      setQuantity(prev => Math.max(prev - 1, 0));
      dispatch(removeProduct({ ...data, quantity: quantity - 1}));
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);

    if (!isNaN(newQuantity)) {
      if (currentData) {
        const updatedProduct = { ...currentData.product, quantity: newQuantity };
        dispatch(addProduct(updatedProduct));
      } else {
        dispatch(removeProduct({ ...data, quantity: newQuantity }));
      }
      setQuantity(newQuantity);
    }
  };

  return (
    <>
      {currentData ?
        <div className={styles.quantity}>
          <button onClick={handleDown} className={styles.quantityDown}>
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={handleChange}
            className={styles.quantityInput}
          />
          <button onClick={handleUp} className={styles.quantityUp}>
            +
          </button>
        </div> :
        <button onClick={handleClick} className={styles.productBtn}>
          купить
        </button>
      }
    </>
  );
}
