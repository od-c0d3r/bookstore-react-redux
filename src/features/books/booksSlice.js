import { createSlice } from '@reduxjs/toolkit';

const initialState = [{ title: "book1" }, { title: "book2" }];

export const booksReducer = createSlice({
  name: 'books',
  initialState,
  reducers: {
  },
});

export default booksReducer.reducer;
