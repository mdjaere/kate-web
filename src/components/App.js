import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Paintings from "./Paintings";
import Menu from "./Menu";
import Info from "./Info";
import Contact from "./Contact";
import Artwork from "./Artwork";
import styled from "styled-components";

const RootContainer = styled.div`
  font-size: calc( 16px + (24 - 26) * (100vw - 400px) / (800-400));
  font-family: verdana, sans-serif;
  margin: 0;
  padding: 0;
`;

const MenuPanel = styled.div`
  position: fixed;
  width: 205px;
  left: 0;
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
  top:0;
  width: 100%;
  background-color: white;
  padding: 5px;
`;

const ContentPanelMobile = styled.div`
  position: static;
  padding: 5px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOriginal: false,
      width: 0,
      height: 0
    };
    this.switchVersion = this.switchVersion.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    // Adding windows size listener
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState(
      { width: window.outerWidth, height: window.outerHeight },
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
          <RootContainer>
            <MenuPanel>
              <PanelHeader>Kate Warner</PanelHeader>
              <Menu switchVersion={this.switchVersion}/>
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
          </RootContainer>
        ) : (
          <RootContainer>
            <MenuPanelMobile>
              <PanelHeader>Kate Warner</PanelHeader>
              <Menu switchVersion={this.switchVersion}/>
            </MenuPanelMobile>
            <ContentPanelMobile>
              {this.state.showOriginal ? (
                <Route exact path="/" component={Paintings} />
              ) : (
                <Route exact path="/" component={Artwork} />
              )}
              <Route path="/info" component={Info} />
              <Route path="/contact" component={Contact} />
            </ContentPanelMobile>
          </RootContainer>
        )}
      </Router>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
