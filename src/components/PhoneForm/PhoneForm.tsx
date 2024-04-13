'use client';

import styles from './PhoneForm.module.scss'

import { validation } from '@/constants/form';

import { RootState } from '@/app/redux/store';
import { postProduct } from '@/api/products/products';
import { handleFormData, handleResponse } from '@/utils/form';
import { IResponse } from '@/interfaces/cart';

import Modal from '../Modal/Modal';

import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { FieldValues, useForm } from 'react-hook-form';

export default function PhoneForm() {
  const cachedData = useSelector((state: RootState) => state.products.productsInCart);
  const { register, formState: { errors }, handleSubmit, } = useForm({ mode: "onBlur" });
  const [status, setStatus] = useState<IResponse>({ success: null, error: '' });

  const onSubmit = async (data: FieldValues) => {
    const formData = handleFormData(data.phone, cachedData);
    const response = await postProduct(formData);
    handleResponse(response, setStatus);
  };

  if (status.success === 0) {
    return (
      <div className={styles.errorStatus}>
        <h2>Кажется что-то пошло не так!</h2>
        <span>{status.error}</span>
      </div>
    )
  }

  return (
    <>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className={styles.title}>Оформите заказ</h3>
        <div className={styles.errors}>
          {errors?.phone && typeof errors.phone.message === 'string' && (
            <p>{errors.phone.message}</p>
          )}
        </div>
        <InputMask
          className={errors.phone ? `${styles.input} ${styles.inputError}` : `${styles.input}`}
          placeholder='Введите ваш телефон'
          mask="+7 (999) 999-99-99"
          maskChar=""
          {...register('phone', validation)}
        />
        <button
          className={cachedData.length ? `${styles.submit}` : `${styles.disabled}`}
          type="submit"
        >
          Купить
        </button>
      </form >
      <Modal status={status.success === 1} />
    </>
  );
};
