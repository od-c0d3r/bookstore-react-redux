const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const ADD_APPID = 'bookStore/books/ADD_APPID';

const initialState = {
  appid: null,
  id: 0,
  books: [],
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

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
          author: action.payload.author,
        }]),
      };
    }
    case REMOVE_BOOK: {
      const booksAfterRemove = state.books.filter((book) => book.id !== action.payload);
      return { ...state, books: booksAfterRemove };
    }
    case ADD_APPID: {
      return { ...state, appid: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
