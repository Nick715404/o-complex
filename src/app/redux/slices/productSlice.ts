'use client';

import { IProduct } from "@/interfaces/products";
import { createSlice } from "@reduxjs/toolkit";

export interface IProductSlice {
  productsCount: number
}

const initialState: IProductSlice = {
  productsCount: 1,
}

export const productsSLice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.productsCount = state.productsCount + action.payload;
    },
    deleteProducts(state, action) {

      if (state.productsCount === 1) {
        state.productsCount = 1;
      }

      state.productsCount = state.productsCount - action.payload;
    }
  }
})

export const { addProduct, deleteProducts } = productsSLice.actions;
export default productsSLice.reducer;