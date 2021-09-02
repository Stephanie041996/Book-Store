/* eslint-disable react/prop-types */
import React from 'react';

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

export default Book;
