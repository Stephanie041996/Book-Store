import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ books, remove }) => (
  <tbody>
    {books.map((book) => (
      <tr key={book.id}>
        <th>{book.id}</th>
        <th>{book.title}</th>
        <th>{book.category}</th>
        <th><button type="button" className="btn" onClick={() => { remove(book); }}>X</button></th>

      </tr>

    ))}

  </tbody>

);

Book.propTypes = {
  books: PropTypes.arrayOf(
    
  ),
  remove: PropTypes.string.isRequired,
};

export default Book;
