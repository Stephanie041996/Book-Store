/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BookList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>

      </tr>
    </thead>
    <Book books={books} />

  </table>
);
BookList.propTypes = {
  books: PropTypes.array,

};
BookList.defaultProps = {
  books: [],

};
const mapStateToProps = (state) => ({
  books: state.bookReducer.books,

});
export default connect(mapStateToProps)(BookList);
