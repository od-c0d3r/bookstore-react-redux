import './BookCard.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { asyncRemoveBook } from '../../redux/books/booksReducer';
import 'react-circular-progressbar/dist/styles.css';

const BookCard = (prop) => {
  const { data } = prop;
  const auhtors = ['William Shiksper', 'Omar Rashad', 'Martin Luthr King', 'Samrood Ali', 'Jean Kaboha'];
  const dispatch = useDispatch();
  const sendRemoveAction = () => {
    dispatch(asyncRemoveBook(data.id));
  };
  const completed = Math.round(Math.random() * 99);

  return (
    <div className="bookCard">
      <div className="bookData">
        <div className="bookCategory">
          {data.category}
        </div>
        <div className="bookTitle">
          {data.title}
        </div>
        <div className="bookAuthor">
          {`By ${auhtors[Math.round(Math.random() * 4)]}`}
        </div>
        <div className="cardMenu">
          <button className="linkBtn" type="button">Comment</button>
          <button className="linkBtn" type="button" onClick={sendRemoveAction}>Remove</button>
          <button className="linkBtn" type="button">Edit</button>
        </div>
      </div>
      <div className="bookProgress">
        <div className="spinner">
          <div className="spinnerContainer">
            <CircularProgressbar
              value={completed}
              strokeWidth={6}
              styles={buildStyles({
                strokeLinecap: 'butt',
                pathColor: '#1784EB',
                textColor: '#f88',
                trailColor: '#E7E7E7',
              })}
            />
          </div>
          <div className="progressText">
            <span className="percentText">
              {`${completed}%`}
            </span>
            <span>
              Completed
            </span>
          </div>
        </div>
        <div className="progressForm">
          <div className="currentChapterLabel">
            CURRENT CHAPTER
          </div>
          <div className="currentChapter">
            {`Chapter ~ ${Math.round(Math.random() * 20) + 1}`}
          </div>
          <button className="progressBtn" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
