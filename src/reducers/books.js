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
  let result;
  switch (action.type) {
    case CREATE_BOOK:
      result = [...state, action.book];
      return result;

    case REMOVE_BOOK:
      result = state.slice(0, state.findIndex((ele) => ele.Id === action.book))
        .concat(state.slice(state.findIndex((ele) => ele.Id === action.book) + 1, state.length));
      return result;
    default:
      return state;
  }
};

export default bookReducer;
