/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({ books, remove }) => (
  <div>
    {books.map((book) => (
      <div className="book-detail">
        <div className="desc">
          <h4>{book.category}</h4>
          <h2>{book.title}</h2>
          <p>Frank Herbert</p>
          <div className="links">
            <p className="comment">Comments</p>
            <p><button type="button" className="btn" onClick={() => { remove(book); }}>Remove</button></p>
            <p className="edit">Edit</p>
          </div>
        </div>
        <div className="progress-bar">
          <div className="outer-circle">
            <div style={{ width: 68, height: 68 }} className="circle-bar">
              <CircularProgressbar
                value={book.id}
                styles={buildStyles({
                  pathColor: '#0290ff',

                })}
              />
            </div>
          </div>
          <div>
            <h4>{`${book.id}%`}</h4>
            <p>Completed</p>
          </div>

        </div>
        <div className="book-chapter">
          <h4>CURRENT CHAPTER</h4>
          <p>
            Chapter 3:
            "A Lesson Learned"

          </p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>

    ))}

  </div>

);

Book.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ),
  remove: PropTypes.func.isRequired,

};
Book.defaultProps = {
  books: [],
};

export default Book;
