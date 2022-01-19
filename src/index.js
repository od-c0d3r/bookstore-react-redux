import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/App';
import store from './redux/store';
import { addAppId } from './redux/books/booksReducer';
import { newAppId } from './api/bookStoreAPI';
import { getLocalID, setLocalID } from './api/localStorageAPI';

function setAppID() {
  if (getLocalID()) {
    store.dispatch(addAppId(getLocalID()));
  } else {
    newAppId().then((newAppId) => {
      setLocalID(newAppId);
      store.dispatch(addAppId(newAppId));
    });
  }
}

setAppID();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
