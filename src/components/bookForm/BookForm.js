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
    <form onSubmit={sendNewBookAction}>
      <input id="inputBookTitle" type="text" placeholder="Enter Book Title" required />
      <input id="inputBookCategory" type="text" placeholder="Category Name" required />
      <input type="submit" value="Add new book" />
    </form>
  );
};

export default BookForm;
