import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import store from '../reducers';
import { removeBook } from '../actions';

const BookList = ({ books, filter }) => {
  const handleRemoveBook = (book) => {
    store.dispatch(removeBook(book));
  };

  let filteredBook = '';
  if (filter === 'All') {
    filteredBook = books;
  } else {
    filteredBook = books.filter((book) => book.category === filter);
  }

  return (
    <div>

      <Book books={filteredBook} remove={handleRemoveBook} />

    </div>
  );
};
BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ),
  filter: PropTypes.string,

};
BookList.defaultProps = {
  books: [],
  filter: '',

};
const mapStateToProps = (state) => ({
  books: state.bookReducer.books,
  filter: state.filterReducer,
});
export default connect(mapStateToProps)(BookList);
