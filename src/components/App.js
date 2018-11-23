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
  font-size: 3mm;
  font-family: verdana, sans-serif;
`;

const MenuPanel = styled.div`
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  margin: 5px;
`;

const PanelHeader = styled.div`
  font-size: 2em;
`;

const ContentPanel = styled.div`
  margin-left: 200px;
  padding: 5px;
`;

const RootContainerMobile = styled.div`
  font-size: 5mm;
  font-family: verdana, sans-serif;
`;

const MenuPanelMobile = styled.div`
width: 100%;
position: absolute;
z-index: 1;
top: 0;
background-color: white;
overflow-x: hidden;
margin: 5px;
`;

const PanelHeaderMobile = styled.div`
  font-size: 2em;
`;

const ContentPanelMobile = styled.div`
  position: static;
  padding: 5px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOriginal: true,
      mobileLayout: false
    };
    this.mobileLayoutWidth = 800;
    this.switchVersion = this.switchVersion.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    // Adding windows size listener
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState(
      {
        width: window.outerWidth,
        height: window.outerHeight,
        mobileLayout: window.outerWidth < this.mobileLayoutWidth
      },
      () =>
        console.log(
          "dim changed",
          window.outerWidth,
          "Mobile Layout: ",
          this.state.mobileLayout
        )
    );
  }

  switchVersion() {
    console.log("switching version")
    this.setState({ showOriginal: !this.state.showOriginal });
  }

  render() {
    const Art = this.state.showOriginal ? Paintings : Artwork;
    return (
      <Router>
        {!this.state.mobileLayout ? (
          <RootContainer>
            <MenuPanel>
              <PanelHeader>Kate Warner</PanelHeader>
              <Menu switchVersion={this.switchVersion} />
            </MenuPanel>
            <ContentPanel>
              <Route exact path="/" component={Art} />
              <Route path="/info" component={Info} />
              <Route path="/contact" component={Contact} />
            </ContentPanel>
          </RootContainer>
        ) : (
          <RootContainerMobile>
            <MenuPanelMobile>
              <PanelHeaderMobile>Kate Warner</PanelHeaderMobile>
              <Menu switchVersion={this.switchVersion} />
            </MenuPanelMobile>
            <ContentPanelMobile>
              <Route exact path="/" component={Art} />
              <Route path="/info" component={Info} />
              <Route path="/contact" component={Contact} />
            </ContentPanelMobile>
          </RootContainerMobile>
        )}
      </Router>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
