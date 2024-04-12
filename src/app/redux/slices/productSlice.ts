'use client';

import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '@/interfaces/products';

export interface IProductSlice {
  productCount: number;
  productsInCart: { product: IProduct; quantity: number }[]; // Теперь храним каждый продукт с его количеством
}

const initialState: IProductSlice = {
  productCount: 0,
  productsInCart: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.productCount += 1;
      const index = state.productsInCart.findIndex(
        (item) => item.product.id === action.payload.id
      );
      if (index !== -1) {
        state.productsInCart[index].quantity += 1;
      } else {
        state.productsInCart.push({ product: action.payload, quantity: 1 });
      }
    },
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
