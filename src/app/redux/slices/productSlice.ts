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
      const existingProductIndex = state.productsInCart.findIndex(
        (item) => item.product.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        console.log(action.payload.quantity);

        state.productsInCart[existingProductIndex].quantity = action.payload.quantity;
        state.productsInCart[existingProductIndex].price += action.payload.price;
      } else {
        state.productsInCart.push({ product: action.payload, quantity: 1, price: action.payload.price });
      }
      state.productCount += 1;
    },
    removeProduct(state, action) {
      const existingProductIndex = state.productsInCart.findIndex(
        (item) => item.product.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        state.productsInCart[existingProductIndex].quantity -= 1;
        state.productsInCart[existingProductIndex].price -= action.payload.price;
        if (state.productsInCart[existingProductIndex].quantity === 0) {
          state.productsInCart.splice(existingProductIndex, 1);
        }
        state.productCount -= 1;
      }
    },
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
