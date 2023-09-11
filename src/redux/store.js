import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './slices/filtersSlice';
import booksReducer from './slices/booksSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    books: booksReducer,
  },
});
