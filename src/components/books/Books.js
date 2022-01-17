import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from "../bookCard/BookCard";

const Books = () => {
    let books = useSelector(state => state.books)
    let booksItem = books.map((book) => {
        return <BookCard data={book} />
    })
    return booksItem;
}

export default Books;
