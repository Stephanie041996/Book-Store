const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const FILTER_BOOK = 'FILTER_BOOK';

const createBook = (book) => ({
  type: CREATE_BOOK,
  book: {
    Id: Math.floor(Math.random() * 30),
    title: book.title,
    category: book.category,
  },

});

const removeBook = (index) => ({
  type: REMOVE_BOOK,
  payload: index,

});
const changeFilter = (filter) => ({
  type: FILTER_BOOK,
  payload: filter,

});

export {
  createBook, removeBook, changeFilter, CREATE_BOOK, REMOVE_BOOK, FILTER_BOOK,
};
