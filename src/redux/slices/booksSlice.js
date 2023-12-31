import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk('fetchBooks/fetchBooksStatus', async (papams) => {
  const { apiKey, searchValue, selectedCategoryUseId, maxResults } = papams;
  const { categoriesProperty } = selectedCategoryUseId;
  const getCategories = `subject:${selectedCategoryUseId.categoriesProperty}`;
  const getBooks = `${!!searchValue ? searchValue : null}`;

  const { data } = await axios.get(
    //https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=${apiKey}
    //`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&filter=free-ebooks&key=${apiKey}`
    `https://www.googleapis.com/books/v1/volumes?q=${getCategories}+${getBooks}&${apiKey}${maxResults} `,
  );
  console.log(data, 'data в редаксе');
  return data.items;
});

const initialState = {
  books: [],
  status: 'loading',
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks(state, action) {
      state.books = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state, action) => {
        state.status = 'loading';
        state.books = [];
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.status = 'success';
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'error';
        state.books = [];
      });
  },
});

export const { setBooks } = booksSlice.actions;
export default booksSlice.reducer;
