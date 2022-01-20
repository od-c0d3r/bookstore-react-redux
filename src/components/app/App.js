import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Books from '../books/Books';
import Header from '../header/Header';
import Categories from '../categories/Categories';

function App() {
  return (
    <div id="app">
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="bookstore-react-redux" element={<Books />} />
        <Route path="home" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
