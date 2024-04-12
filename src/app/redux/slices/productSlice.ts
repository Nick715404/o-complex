'use client';

import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '@/interfaces/products';

export interface IProductSlice {
  productCount: number;
  productsInCart: { product: IProduct; quantity: number, price: number }[];
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
        if (state.productsInCart[index].quantity > 1) {
          state.productsInCart[index].price += action.payload.price;
        }
      } else {
        state.productsInCart.push({ product: action.payload, quantity: 1, price: action.payload.price });
      }
    },
    removeProduct(state, action) {
      const index = state.productsInCart.findIndex(
        (item) => item.product.id === action.payload.id
      );
      if (index !== -1) {
        state.productCount -= 1;
        state.productsInCart[index].quantity -= 1;
        if (state.productsInCart[index].quantity === 0) {
          state.productsInCart.splice(index, 1);
        } else {
          state.productsInCart[index].price -= action.payload.price;
        }
      }
    },
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
