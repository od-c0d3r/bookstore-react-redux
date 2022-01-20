import React from 'react';
import { useDispatch } from 'react-redux';
import { asyncRemoveBook } from '../../redux/books/booksReducer';

const BookCard = (prop) => {
  const { data } = prop;
  const dispatch = useDispatch();
  const sendRemoveAction = () => {
    dispatch(asyncRemoveBook(data.id));
  };

  return (
    <>
      <div className="book-title">
        <span>Title: </span>
        <span>{data.title}</span>
      </div>
      <div className="book-category">
        <span>category: </span>
        <span>{data.category}</span>
      </div>
      <button type="button" onClick={sendRemoveAction}>Remove</button>
    </>
  );
};

export default BookCard;
