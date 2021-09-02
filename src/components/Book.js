import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ books }) => (
  <tbody>
    {books.map((book) => (
      <tr key={book.id}>
        <th>{book.id}</th>
        <th>{book.title}</th>
        <th>{book.category}</th>

      </tr>

    ))}

  </tbody>

);

Book.propTypes = {
  books: PropTypes.shape.isRequired,
};

export default Book;
