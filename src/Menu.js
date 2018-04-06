import React from "react";
import { Link } from "react-router-dom";

const menu = (props) => {
  return (
    <div>
      <ul className="menulist">
        <li className="menuitem">
          <Link to="/">Main</Link>
        </li>
      </ul>
      <ul className="menulist">
        <li className="menuitem">
          <Link to="/info">Info</Link>
        </li>
        <li className="menuitem">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default menu;
