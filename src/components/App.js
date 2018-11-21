import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Paintings from "./Paintings";
import Menu from "./Menu";
import Info from "./Info";
import Contact from "./Contact";
import Artwork from "./Artwork";
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

const MenuPanelMobile = styled.div`
  position: fixed;
  height: 100px;
  top: 0;
  width: 100%;
  background-color: white;
  padding: 5px;
`;

const ContentPanelMobile = styled.div`
position: absolute;
top: 400;
left: 0;
right: 0;
padding: 5px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOriginal: false,
      width: window.innerWidth,
      height: window.innerHeight
    };
    this.switchVersion = this.switchVersion.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    // Adding windows size listener
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState(
      { width: window.innerWidth, height: window.innerHeight },
      () => console.log("dim changed", this.state.width, this.state.height)
    );
  }

  switchVersion() {
    this.setState({ showOriginal: !this.state.showOriginal });
  }

  render() {
    const width = this.state.width;
    return (
      <Router>
        {width > 800 ? (
          <MenuContainer>
            <MenuPanel>
              <PanelHeader>Kate Warner</PanelHeader>
              <Menu />
              <p onClick={this.switchVersion}>copyright 2018</p>
            </MenuPanel>
            <ContentPanel>
              {this.state.showOriginal && (
                <Route exact path="/" component={Paintings} />
              )}
              {!this.state.showOriginal && (
                <Route exact path="/" component={Artwork} />
              )}
              <Route path="/info" component={Info} />
              <Route path="/contact" component={Contact} />
            </ContentPanel>
          </MenuContainer>
        ) : (
          <MenuContainer>
            <MenuPanelMobile>
              <PanelHeader>Kate Warner</PanelHeader>
              <Menu />
              <p onClick={this.switchVersion}>copyright 2018</p>
            </MenuPanelMobile>
            <ContentPanelMobile>
              {this.state.showOriginal && (
                <Route exact path="/" component={Paintings} />
              )}
              {!this.state.showOriginal && (
                <Route exact path="/" component={Artwork} />
              )}
              <Route path="/info" component={Info} />
              <Route path="/contact" component={Contact} />
            </ContentPanelMobile>
          </MenuContainer>
        )}
      </Router>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
