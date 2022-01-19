import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksState from './books/booksReducer';

const reducers = combineReducers({
  booksState,
});

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store;
