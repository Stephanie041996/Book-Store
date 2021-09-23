import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const initialState = {
  books: [{
    id: Math.floor(Math.random() * 30),
    title: 'The Awakening',
    category: 'Sci-Fi',
  },
  {
    id: Math.floor(Math.random() * 30),
    title: 'Cracking the coding Interview',
    category: 'Learning',

  },
  {
    id: Math.floor(Math.random() * 30),
    title: 'The First world war',
    category: 'History',

  },

  ],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { books: [...state.books, action.book] };

    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((item, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default bookReducer;
