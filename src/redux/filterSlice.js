import { createSlice } from '@reduxjs/toolkit';
const filtersInitialState = {
  query: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action) {
      state.query = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
