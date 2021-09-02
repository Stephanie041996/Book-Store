/* eslint-disable react/no-array-index-key */
import React from 'react';

const BooksForm = () => {
  const bookCategory = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div className="book-form">
      <input type="text" placeholder="Add title" />
      <select name="Book Category" id="select">
        {bookCategory.map((x, i) => (
          <option key={i}>{x}</option>
        ))}

      </select>

      <button type="submit">Add Book</button>
    </div>
  );
};

export default BooksForm;
