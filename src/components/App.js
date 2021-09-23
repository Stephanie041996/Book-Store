import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Nav from './nav';
import './App.css';

const App = () => (
  <div className="App">
    <Nav />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
