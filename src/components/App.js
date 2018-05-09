import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PaintingList from "./PaintingList";
import Menu from "./Menu";
import Info from "./Info";
import Contact from "./Contact";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <div className="menuPanel">
            <div className="header">Kate Warner</div>
            <Menu/>
            <p>copyright 2018</p>
          </div>
          <div className="contentPanel">
            <Route exact path="/" component={PaintingList} />
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
