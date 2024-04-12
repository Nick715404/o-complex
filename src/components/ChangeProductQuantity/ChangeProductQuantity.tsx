'use client'

import styles from './ChangeProductQuantity.module.scss';
import { useCallback, useState } from "react"

export default function ChangeProductQuantity() {

  const [value, setValue] = useState(1);

  const handleUp = () => {
    setValue((prev) => prev + 1);
  }

  const handleDown = () => {
    setValue((prev) => {
      if (prev === 1) return prev = 1;
      return prev - 1;
    })
  }

  const handleChangeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+e.target.value)
  }, [value]);

  return (
    <div className={styles.quantity}>
      <button onClick={handleUp} className={styles.quantityUp}>+</button>
      <input
        type="number"
        value={value}
        className={styles.quantityInput}
        onInput={handleChangeValue}
      />
      <button onClick={handleDown} className={styles.quantityDown}>-</button>
    </div>
  )
}