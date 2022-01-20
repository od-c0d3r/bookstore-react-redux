import { addBook } from '../../api/bookStoreAPI';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const SET_INIT = 'bookStore/books/SET_INIT';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = {
  appid: null,
  id: 0,
  books: [],
};

export const initState = (payload) => ({
  type: SET_INIT,
  payload,
});

export const asyncAddBook = (payload) => (dispatch, getState) => {
  const { booksState } = getState();
  addBook({ ...payload, item_id: booksState.id + 1 }).then(() => dispatch({
    type: ADD_BOOK,
    payload,
  }));
};

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return {
        id: state.id + 1,
        books: state.books.concat([{
          id: state.id + 1,
          title: action.payload.title,
          category: action.payload.category,
        }]),
      };
    }
    case REMOVE_BOOK: {
      const booksAfterRemove = state.books.filter((book) => book.id !== action.payload);
      return { ...state, books: booksAfterRemove };
    }
    case SET_INIT: {
      const { newAppID, newBooks, newId } = action.payload;
      return {
        ...state,
        appid: newAppID,
        id: newId,
        books: newBooks,
      };
    }
    default:
      return state;
  }
};

export default reducer;
