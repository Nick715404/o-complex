'use client';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { productsSlice } from '@/app/redux/slices/productSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  products: productsSlice.reducer, 
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
