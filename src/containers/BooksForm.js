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

  const bookCategory = ['Category', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const { title, category } = book;
  return (
    <div className="book-form">
      <h4>
        ADD NEW BOOK
      </h4>
      <form>
        <input id="book" name="title" placeholder="Book title" value={title} onChange={handleChange} />
        <select name="category" id="book-category" onChange={handleChange} value={category} placeholder="Category">
          {bookCategory.map((x) => {
            if (x === 'Category') {
              return (
                <option key={x} hidden className="place">{x}</option>
              );
            }

            return (

              <option key={x}>{x}</option>
            );
          })}

        </select>

        <button type="submit" onClick={handleSubmit}>Add Book</button>
      </form>
    </div>
  );
};

export default BooksForm;
