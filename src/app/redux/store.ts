'use client'

import { persistStore } from 'redux-persist';
import persistedReducer from './persist/persistConfig';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;