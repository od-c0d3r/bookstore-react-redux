import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../features/books/booksReducer';

const BookCard = (prop) => {
  const { data } = prop;
  const dispatch = useDispatch();
  const sendRemoveAction = () => {
    dispatch(removeBook(data.id));
  };

  return (
    <>
      <div className="book-title">
        <span>Title: </span>
        <span>{data.title}</span>
      </div>
      <div className="book-author">
        <span>Author: </span>
        <span>{data.author}</span>
      </div>
      <button type="button" onClick={sendRemoveAction}>Remove</button>
    </>
  );
};

export default BookCard;
