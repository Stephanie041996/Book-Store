import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import store from '../reducers';
import { removeBook } from '../actions';

const BookList = ({ books }) => {
  const handleRemoveBook = (index) => {
    store.dispatch(removeBook(index));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove</th>

        </tr>
      </thead>
      <Book books={books} remove={handleRemoveBook} />

    </table>
  );
};
BookList.propTypes = {
  books: PropTypes.arrayOf,

};
BookList.defaultProps = {
  books: [],

};
const mapStateToProps = (state) => ({
  books: state.bookReducer.books,

});
export default connect(mapStateToProps)(BookList);
