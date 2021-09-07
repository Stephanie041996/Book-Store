import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  return (
    <div className="panel-bg">
      <span className="Bookstore-CMS Text-Style-5">
        Bookstore CMS
      </span>
      <span className="BOOKS Text-Style-7">
        BOOKS
      </span>
      <span className="CATEGORIES Text-Style-7">
        CATEGORIES
      </span>
      <div className="user-icon">

        <FontAwesomeIcon icon={faUser} className="icon" />
      </div>

      {/* <div className="Oval">
        <div className="Mask" />
      </div> */}
    </div>
  );
}
export default Nav;
