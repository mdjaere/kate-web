import React from "react";
import ReactDOM from "react-dom";
import PaintingList from "./PaintingList";
import Menu from "./Menu";
import Info from "./Info"
import Contact from "./Contact"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activePage: "Main" };
    this.changePage = this.changePage.bind(this);
  }

  changePage(pageName) {
    this.setState({ activePage: pageName });
  }

  render() {
    return (
      <div>
        <div className="leftPanel">
          <div className="header">Kate Warner</div>
          <Menu
            activePage={this.state.activePage}
            changePage={this.changePage}
          />
          <p>copyright 2018</p>
        </div>
        <div className="rightPanel">
          {this.state.activePage == "Main" && <PaintingList />}
          {this.state.activePage == "Info" && <Info />}
          {this.state.activePage == "Contact" && <Contact />}
        </div>
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
