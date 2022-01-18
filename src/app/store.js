import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import books from '../features/books/booksReducer';

const reducers = combineReducers({
  books,
});

const store = createStore(
  reducers,
  applyMiddleware(logger),
);

export default store;
