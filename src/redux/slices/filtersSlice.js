import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  selectedCategoryUseId: 0,
  sortActivId: { name: 'Relevance', sortProperty: 'rating' },
};

export const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSelectedCategoryUseId(state, action) {
      state.selectedCategoryUseId = action.payload;
    },
    setSortActivId(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setSearchValue, setSelectedCategoryUseId, setSortActivId } = filtersSlice.actions;

export default filtersSlice.reducer;
