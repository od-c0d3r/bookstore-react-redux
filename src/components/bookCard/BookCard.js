import React from 'react';

const BookCard = (prop) => {
  const { data } = prop;
  return (
    <>
      <div className="book-title">
        {data.title}
      </div>
    </>
  );
};

export default BookCard;
