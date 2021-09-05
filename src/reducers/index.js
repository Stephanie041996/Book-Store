import { combineReducers, createStore } from 'redux';
import bookReducer from './Books';
import filterReducer from './filter';

const rootReducer = combineReducers({
  bookReducer,
  filterReducer,
});

const store = createStore(rootReducer);
export default store;
