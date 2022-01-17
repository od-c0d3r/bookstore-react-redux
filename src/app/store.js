import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../features/books/booksSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;
