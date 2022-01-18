import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksState from '../features/books/booksReducer';

const reducers = combineReducers({
  booksState,
});

const store = createStore(
  reducers,
  applyMiddleware(logger),
);

export default store;
