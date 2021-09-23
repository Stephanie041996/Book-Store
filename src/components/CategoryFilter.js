import React from 'react';
import PropTypes from 'prop-types';

const category = ['All', ' Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = ({ handleChange }) => (
  <form id="filter">
    <label htmlFor="Filter">

      <br />

      <select name="filter" id="fil" onChange={handleChange}>
        {category.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}

      </select>
    </label>
  </form>
);

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,

};
export default CategoryFilter;
