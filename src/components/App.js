import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Paintings from "./Paintings";
import Menu from "./Menu";
import Info from "./Info";
import Contact from "./Contact";
import Artwork from "./Artwork"
import styled from "styled-components";

const MenuContainer = styled.div`
  font-size: 10px;
  font-family: verdana, sans-serif;
  margin: 0;
  padding: 0;
`;

const MenuPanel = styled.div`
  position: fixed;
  width: 205px;
  left: 0;
  height: 100%;
  background-color: white;
  padding: 5px;
`;

const PanelHeader = styled.div`
  font-size: 1.8em;
`;

const ContentPanel = styled.div`
  position: absolute;
  left: 215px;
  right: 0;
  padding: 5px;
  height: 100%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <MenuContainer>
          <MenuPanel>
            <PanelHeader>Kate Warner</PanelHeader>
            <Menu />
            <p>copyright 2018</p>
          </MenuPanel>
          <ContentPanel>
            {/* <Route exact path="/" component={Paintings} /> */}
            <Route exact path="/" component={Artwork} />
            <Route path="/info" component={Info} />
            <Route path="/contact" component={Contact} />
          </ContentPanel>
        </MenuContainer>
      </Router>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
