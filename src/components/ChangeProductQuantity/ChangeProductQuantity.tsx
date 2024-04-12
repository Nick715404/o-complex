'use client';

import styles from './ChangeProductQuantity.module.scss';
import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import { IProduct } from '@/interfaces/products';
import { addProduct } from '@/app/redux/slices/productSlice';

interface Props {
  data: IProduct;
}

export default function ChangeProductQuantity({ data }: Props) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);

  const handleUp = () => {
    setValue((prev) => prev + 1);
    dispatch(addProduct(data));
  };

  const handleDown = () => {
    if (value > 1) {
      setValue((prev) => prev - 1);
      // Здесь вы можете реализовать удаление товара из корзины или уменьшение его количества
      // Но эта часть зависит от вашей логики и структуры данных в Redux
    }
  };

  const handleChangeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+e.target.value);
  }, []);

  return (
    <div className={styles.quantity}>
      <button onClick={handleUp} className={styles.quantityUp}>
        +
      </button>
      <input
        type="number"
        value={value}
        className={styles.quantityInput}
        onInput={handleChangeValue}
      />
      <button onClick={handleDown} className={styles.quantityDown}>
        -
      </button>
    </div>
  );
}
