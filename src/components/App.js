import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Menu from "./Menu";
import Bio from "./Bio";
import Contact from "./Contact";
import ArtworkListContainer from "./ArtworkListContainer";
import ArtworkContainer from "./ArtworkContainer";
import ProjectListContainer from "./ProjectListContainer";
import ProjectContainer from "./ProjectContainer";
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
  margin: 20px 0px 10px 0px;
  z-index: 1;
  top: 0;
  background-color: white;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
  -webkit-tap-highlight-color: transparent;
`;

const Header = styled.div`
  font-size: 2em;
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: none;
`;

const ContentPanel = styled.div`
  width: 100%;
  max-width: 960px;
`;

const Footer = styled.div`
  font-size: 0.7em;
  bottom: 0;
`;

const App = function (props) {
  return (
    <BrowserRouter>
      <RootContainer>
        <Headerpanel>
          <Header>
            <Link style={{ color: "black" }} to="/">
              Kate Warner
            </Link>
          </Header>
          <Menu />
        </Headerpanel>
        <ContentPanel>
          <Switch>
            <Route exact path="/">
              <ArtworkListContainer />
            </Route>
            <Route exact path="/work/:id">
              <ArtworkContainer />
            </Route>
            <Route exact path="/work">
              <ArtworkListContainer />
            </Route>
            <Route exact path="/projects/:id">
              <ProjectContainer />
            </Route>
            <Route exact path="/projects">
              <ProjectListContainer />
            </Route>
            <Route exact path="/bio">
              <Bio />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </ContentPanel>
        <Footer>
          <p>© 2023</p>
        </Footer>
      </RootContainer>
    </BrowserRouter>
  );
};

export default App;
