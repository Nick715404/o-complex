'use client';

import styles from './ChangeProductQuantity.module.scss';
import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import { IProduct } from '@/interfaces/products';
import { addProduct, removeProduct } from '@/app/redux/slices/productSlice';

interface Props {
  data: IProduct;

}

export default function ChangeProductQuantity({ data }: Props) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  const [status, setStatus] = useState<boolean>(false);

  const handleClick = () => {
    setStatus(true);
    dispatch(addProduct(data));
  }

  const handleUp = () => {
    setValue((prev) => prev + 1);
    dispatch(addProduct(data));
  };

  const handleDown = () => {
    if (value > 1) setValue((prev) => prev - 1);
    if (value === 1) setStatus(false);
    dispatch(removeProduct(data));
  };

  const handleChangeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+e.target.value);
  }, []);

  return (
    <>
      {status ?
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
        </div> :
        <button onClick={handleClick} className={styles.productBtn}>
          купить
        </button>
      }
    </>
  );
}
