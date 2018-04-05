import React from "react";
import { Link } from "react-router-dom";

const menu = ({ activePage, changePage }) => {
  const isMainActive = activePage == "Main";
  const isContactActive = activePage == "Contact";
  const isInfoActive = activePage == "Info";
  return (
    <div>
      <ul className="menulist">
        <li className={["menuitem", isMainActive ? "active" : ""].join(" ")}>
          <Link to="/">Main</Link>
        </li>
      </ul>
      <ul className="menulist">
        <li className={["menuitem", isInfoActive ? "active" : ""].join(" ")}>
          <Link to="/info">Info</Link>
        </li>
        <li className={["menuitem", isContactActive ? "active" : ""].join(" ")}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default menu;
