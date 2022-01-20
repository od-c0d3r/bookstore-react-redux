import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/App';
import store from './redux/store';
import { initState } from './redux/books/booksReducer';
import { getBooks, newAppId } from './api/bookStoreAPI';
import { getLocalID, setLocalID } from './api/localStorageAPI';

function initAppState() {
  if (getLocalID()) {
    getBooks().then((data) => {
      const processData = data.length ? Object.values(JSON.parse(data)).flat() : [];
      store.dispatch(initState({
        newAppID: getLocalID(),
        newBooks: processData,
        newId: processData.length,
      }));
    });
  } else {
    newAppId().then((appId) => {
      setLocalID(appId);
      store.dispatch(initState({ newAppID: appId, newBooks: [], newId: 0 }));
    });
  }
}

initAppState();

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
