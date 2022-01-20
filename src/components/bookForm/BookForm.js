import './BookForm.scss';
import { useDispatch } from 'react-redux';
import { asyncAddBook } from '../../redux/books/booksReducer';

const BookForm = () => {
  const dispatch = useDispatch();
  const sendNewBookAction = (e) => {
    dispatch(asyncAddBook(
      {
        title: e.target[0].value,
        category: e.target[1].value,
      },
    ));

    e.target.reset();
    e.preventDefault();
  };

  return (
    <div id="formDiv">
      <h3 className="formHead">ADD NEW BOOK</h3>
      <form onSubmit={sendNewBookAction}>
        <input id="inputBookTitle" type="text" placeholder="Book Title" required />
        <input id="inputBookCategory" type="text" placeholder="Category Name" required />
        <input id="submitBtn" type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
};

export default BookForm;
