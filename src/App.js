import React from "react";
import ReactDOM from "react-dom";
import paintingList from "./paintingList.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activePage: "Main" };
  }

  changePage(pageName) {
    console.log(pageName);
    this.setState({ activePage: pageName });

  }

  render() {
    const isMainActive = this.state.activePage == "Main";
    const isContactActive = this.state.activePage == "Contact";
    const isInfoActive = this.state.activePage == "Info";
    return (
      <div>
        <div className="leftPanel">
          {" "}
          <div className="header">Kate Warner</div>
          <ul className="menulist">
            <li
              className={["menuitem", isMainActive ? "active" : ""].join(
                " "
              )}
            >
              <a href="#" onClick={() => this.changePage("Main")}>
                Main
              </a>
            </li>
          </ul>
          <ul className="menulist">
            <li
              className={["menuitem",  isInfoActive ? "active" : ""].join(
                " "
              )}
            >
              <a href="#" onClick={() => this.changePage("Info")}>
                Info
              </a>
            </li>
            <li
              className={["menuitem", isContactActive ? "active" : ""].join(
                " "
              )}
            >
              <a href="#" onClick={() => this.changePage("Contact")}>
                Contact
              </a>
            </li>
          </ul>
          <ul className="menulist">
            <li>copyright 2018</li>
          </ul>
        </div>
        <div className="rightPanel">{paintingList}</div>
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
