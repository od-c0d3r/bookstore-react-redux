import React from 'react';

const BookCard = (prop) => {
    let { data } = prop
    return (
        <React.Fragment>
            <div className='book-title'>
                {data.title}
            </div>
        </React.Fragment>
    );
}

export default BookCard;
