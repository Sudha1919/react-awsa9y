import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <div className="nav-wrapper">
         <ul id="nav-mobile" className="hide-on-med-and-down left">
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/career">Career</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
