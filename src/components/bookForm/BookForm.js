import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/booksReducer';

const BookForm = () => {
  const dispatch = useDispatch();
  const sendNewBookAction = (e) => {
    dispatch(addBook(
      {
        title: e.target[0].value,
        author: e.target[1].value,
      },
    ));

    e.target.reset();
    e.preventDefault();
  };

  return (
    <form onSubmit={sendNewBookAction}>
      <input id="inputBookTitle" type="text" placeholder="Enter Book Title" required />
      <input id="inputBookAuthor" type="text" placeholder="Author Name" required />
      <input type="submit" value="Add new book" />
    </form>
  );
};

export default BookForm;
