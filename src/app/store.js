import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';

const reducers = combineReducers({
    booksReducer
});

const store = createStore(
  reducers,
    applyMiddleware(logger)
);

export default store;
