import React from "react";
import ReactDOM from "react-dom";
import paintingList from "./paintingList.js"

const App = () => {
  return (
    <div>
      <div className="leftPanel">
        {" "}
        <div className="header">Kate Warner</div>
        <ul className="menulist">
          <li className={["menuitem", "active"]}>
            <a href="http://katewarner.net/">Main</a>
          </li>
        </ul>
        <ul className="menulist">
          <li className={["menuitem", "active"]}>
            <a href="http://katewarner.net/">Info</a>
          </li>
          <li className={["menuitem", "active"]}>
            <a href="http://katewarner.net/">News/Contact</a>
          </li>
        </ul>
      </div>
      <div className="rightPanel">{paintingList}</div>
    </div>
  );
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
