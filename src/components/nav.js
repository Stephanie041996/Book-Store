import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  return (
    <div className="navbar">
      <div className="panel-bg font-mont">
        <span className="nav Bookstore-CMS">
          Bookstore CMS
        </span>
        <span className="nav BOOKS ">
          BOOKS
        </span>
        <span className=" nav CATEGORIES ">
          CATEGORIES
        </span>
        <div className="user-icon">

          <FontAwesomeIcon icon={faUser} className="icon" />
        </div>

      </div>
    </div>
  );
}
export default Nav;
