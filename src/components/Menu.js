import React from "react";
import { Link } from "react-router-dom";

const style = {
  menulist: {
    listStyle: "none",
    padding: 0
  },
  menuitem: {},
  active: {
    fontWeight: "bold"
  }
};

const menu = props => {
  return (
    <div>
      <ul style={style.menulist}>
        <li style={style.menuitem}>
          <Link to="/">Main</Link>
        </li>
        <li style={style.menuitem}>
          <Link to="/info">Info</Link>
        </li>
        <li style={style.menuitem}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default menu;
