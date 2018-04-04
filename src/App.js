import React from "react";
import ReactDOM from "react-dom";
import img1 from "./assets/1_web1_v2.jpg";
import img2 from "./assets/1_web14.jpg";
import img3 from "./assets/1_web31.jpg";
import img4 from "./assets/1_untitled-2014-web3.jpg";

const paintings = [
  { src: img1, text: "'Disseveral' 2012: oil on panel, 21x28cm" },
  { src: img2, text: "" },
  { src: img3, text: "" },
  { src: img4, text: "Untitled, 2014: oil on board" }
];

const paintingsList = paintings.map(item => (
  <div key={item.src}>
    <img src={item.src} />
    <p> {item.text}</p>
  </div>
));

const App = () => {
  return (
    <div>
      <div className="menu">
        {" "}
        <div className="header">Kate Warner</div>
        <ul className="menulist">
          <li className={["menuitem", "active"]}>
            <a href="http://katewarner.net/">Main</a>
          </li>
        </ul>
        <ul className="menulist">
          <li className="menuitem">Info</li>
          <li className="menuitem">News/Contact</li>
        </ul>
      </div>
      <div className="content">{paintingsList}</div>
    </div>
  );
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
