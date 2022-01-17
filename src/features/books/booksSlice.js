import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const booksReducer = createSlice({
  name: 'books',
  initialState,
  reducers: {
  },
});

export default booksReducer.reducer;
