const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const createBook = (book) => ({
  type: CREATE_BOOK,
  book: {
    Id: Math.floor(Math.random() * 30),
    title: book.title,
    category: book.category,
  },

});

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,

});

export {
  createBook, removeBook, CREATE_BOOK, REMOVE_BOOK,
};
