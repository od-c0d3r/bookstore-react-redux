import React from 'react';
import BookCard from "../bookCard/BookCard";

const Books = () => {
    let data = [{ title: "book1" }, { title: "book2" }]
    let booksItem = data.map((book) => {
        return <BookCard data={book} />
    })
    return booksItem;
}

export default Books;
