'use client';

import React from 'react';
import InputMask from 'react-input-mask';
import { FieldValues, RegisterOptions, useForm } from 'react-hook-form';
import { validation } from '@/constants/form';

export default function PhoneForm() {

  const { register, formState: { errors }, handleSubmit, } = useForm({ mode: "onBlur" });

  const onSubmit = (data: FieldValues) => {
    console.log(JSON.stringify(data.phone));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputMask
        mask="+7 (999) 999-99-99"
        maskChar="_"
        {...register('phone', validation)}
      />
      <div className="">
        {errors?.phone && typeof errors.phone.message === 'string' && (
          <p>{errors.phone.message}</p>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};