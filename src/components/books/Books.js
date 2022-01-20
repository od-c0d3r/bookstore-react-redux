import './Books.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from '../bookCard/BookCard';
import BookForm from '../bookForm/BookForm';

const Books = () => {
  const books = useSelector((state) => state.booksState.books);
  const emptyList = <div className="emptyList">ADD NEW BOOK</div>;
  const booksItem = (books.length === 0)
    ? emptyList : books.map((book) => <BookCard key={book.id} data={book} />);
  return (
    <div id="booksPage">
      <div id="booksCards">
        {booksItem}
      </div>
      <hr className="seprator" />
      <BookForm />
    </div>
  );
};

export default Books;
