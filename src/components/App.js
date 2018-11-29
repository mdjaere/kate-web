import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Paintings from "./Paintings";
import Menu from "./Menu";
import Bio from "./Bio";
import Contact from "./Contact";
import Artwork from "./Artwork";
import styled from "styled-components";

const RootContainer = styled.div`
  font-family: verdana, sans-serif;
  font-size: 20px;
  margin: 0px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Headerpanel = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 20px 0px 20px 0px;
  z-index: 1;
  top: 0;
  background-color: white;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  
`;

const Header = styled.div`
  font-size: 2em;
`;

const ContentPanel = styled.div`
`;

const Footer = styled.div`
font-size: 0.7em;
bottom: 0
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOriginal: false
    };
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
        width: window.innerWidth,
        height: window.innerHeight
      },
      () => console.log(`Dim changed: ${this.state.width} x ${this.state.height}`  )
    );
  }

  switchVersion() {
    console.log("switching version");
    this.setState({ showOriginal: !this.state.showOriginal });
  }

  render() {
    const Art = this.state.showOriginal ? Paintings : Artwork;
    return (
      <Router>
        <RootContainer>
          <Headerpanel>
            <Header>Kate Warner</Header>
            <Menu />
          </Headerpanel>
          <ContentPanel>
            <Route exact path="/" component={Art} />
            <Route path="/bio" component={Bio} />
            <Route path="/contact" component={Contact} />
          </ContentPanel>
          <Footer>
            <p onClick={this.switchVersion}>Copyright 2018</p>
          </Footer>
        </RootContainer>
      </Router>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
