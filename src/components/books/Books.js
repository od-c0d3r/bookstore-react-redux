import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from '../bookCard/BookCard';

const Books = () => {
  const books = useSelector((state) => state.booksState.books);
  const booksItem = books.map((book) => <BookCard key={book.title} data={book} />);
  return booksItem;
};

export default Books;
