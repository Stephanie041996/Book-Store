import React, { useState } from 'react';
import { createBook } from '../actions/index';
import store from '../reducers';

const BooksForm = () => {
  const [book, setBook] = useState({
    title: '',
    category: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,

    });
  };
  const handleSubmit = (e) => {
    store.dispatch(createBook(book));
    setBook({
      title: '',
      category: '',
    });
    e.preventDefault();
  };

  const bookCategory = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const { title, category } = book;
  return (
    <div className="book-form">
      <form>
        <input id="book" name="title" placeholder="Add title" value={title} onChange={handleChange} />
        <select name="category" id="book-category" onChange={handleChange} value={category}>
          {bookCategory.map((x) => (
            <option key={x}>{x}</option>
          ))}

        </select>

        <button type="submit" onClick={handleSubmit}>Add Book</button>
      </form>
    </div>
  );
};

export default BooksForm;
