import { FILTER_BOOK } from '../actions';

const initialState = 'All';
const filterReducer = (state = initialState, action) => {
  if (action.type === FILTER_BOOK) {
    return action.filter;
  }
  return state;
};

export default filterReducer;
