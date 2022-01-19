import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from '../bookCard/BookCard';
import BookForm from '../bookForm/BookForm';

const Books = () => {
  const books = useSelector((state) => state.booksState.books);
  const booksItem = books.length === 0 ? '[EMPTY LIST]' : books.map((book) => <BookCard key={book.title} data={book} />);
  return (
    <>
      <BookForm />
      {booksItem}
    </>
  );
};

export default Books;
