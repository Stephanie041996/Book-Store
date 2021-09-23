import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './reducers/index';

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

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

export default initialState;
