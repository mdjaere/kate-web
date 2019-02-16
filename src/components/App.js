import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import Menu from "./Menu";
import Bio from "./Bio";
import Contact from "./Contact";
import PaintingsContainer from "./PaintingsContainer";
import PaintingContainer from "./PaintingContainer";
import ProjectsContainer from "./ProjectsContainer";
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

const MenuWithRouter = withRouter(Menu);

const App = function(props) {
  return (
    <Router>
      <RootContainer>
        <Headerpanel>
          <Header>
            <Link style={{ color: "black" }} to="/">
              Kate Warner
            </Link>
          </Header>
          <MenuWithRouter />
        </Headerpanel>
        <ContentPanel>
          <Switch>
            <Route exact path="/">
              <Redirect to={"/paintings"} />
            </Route>
            <Route exact path="/paintings" component={PaintingsContainer} />
            <Route exact path="/paintings/:id" component={PaintingContainer} />
            <Route exact path="/projects" component={ProjectsContainer} />
            <Route exact path="/bio" component={Bio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects/:id" component={ProjectContainer} />
          </Switch>
        </ContentPanel>
        <Footer>
          <p>Copyright 2018</p>
        </Footer>
      </RootContainer>
    </Router>
  );
};

export default App;
