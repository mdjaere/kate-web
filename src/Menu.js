import React from "react";

const menu = ({ activePage, changePage }) => {
  const isMainActive = activePage == "Main";
  const isContactActive = activePage == "Contact";
  const isInfoActive = activePage == "Info";
  return (
    <div>
      <ul className="menulist">
        <li className={["menuitem", isMainActive ? "active" : ""].join(" ")}>
          <a href="#" onClick={() => changePage("Main")}>
            Main
          </a>
        </li>
      </ul>
      <ul className="menulist">
        <li className={["menuitem", isInfoActive ? "active" : ""].join(" ")}>
          <a href="#" onClick={() => changePage("Info")}>
            Info
          </a>
        </li>
        <li className={["menuitem", isContactActive ? "active" : ""].join(" ")}>
          <a href="#" onClick={() => changePage("Contact")}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default menu;
