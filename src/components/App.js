import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Paintings from "./Paintings";
import Menu from "./Menu";
import Info from "./Info";
import Contact from "./Contact";

const style = {
  body: {
    fontSize: "10px",
    fontFamily: ["Verdana", "sans-serif"],
    margin: 0,
    padding: 0,
  },
  header: {
    fontSize: "1.8em"
  },
  menuPanel: {
    position: "fixed",
    width: "205px",
    left: 0,
    height: "100%",
    backgroundColor: "white",
    padding: "5px",
  },
  contentPanel: {
    position: "absolute",
    left: "215px",
    right: 0,
    padding: "5px",
    height: "100%",
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div style={style.body}>
          <div style={style.menuPanel}>
            <div style={style.header}>Kate Warner</div>
            <Menu/>
            <p>copyright 2018</p>
          </div>
          <div style={style.contentPanel}>
            <Route exact path="/" component={Paintings} />
            <Route path="/info" component={Info} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
