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
import Paintings from "./Paintings";
import Projects from "./Projects";
import Project from "./Project";
import styled from "styled-components";

const RootContainer = styled.div`
  font-family: verdana, sans-serif;
  font-size: 20px;
  margin: 0px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  a:link {
    text-decoration: none;
    color: #666;
  }
  a:active {
    text-decoration: none;
    color: #666;
  }
  a:visited {
    text-decoration: none;
    color: #666;
  }
  a:hover {
    text-decoration: underline;
    color: #666;
  }
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

const ContentPanel = styled.div``;

const Footer = styled.div`
  font-size: 0.7em;
  bottom: 0;
`;

const App = function(props) {
  const {
    switchVersion,
    setPaintingList,
    setActiveProject,
    setProjectList
  } = props;
  const { offlineMode, paintingList, projectList, activeProject } = props;
  const MenuWithRouter = withRouter(Menu);
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
            <Route
              exact
              path="/paintings"
              component={props => {
                return (
                  <Paintings
                    {...props}
                    offlineMode={offlineMode}
                    paintingList={paintingList}
                    setPaintingList={setPaintingList}
                  />
                );
              }}
            />
            <Route
              exact
              path="/projects"
              component={props => (
                <Projects
                  {...props}
                  offlineMode={offlineMode}
                  projectList={projectList}
                  setProjectList={setProjectList}
                  setActiveProject={setActiveProject}
                />
              )}
            />
            <Route
              path
              path="/projects/:id"
              component={props => (
                <Project
                  {...props}
                  project={activeProject}
                  offlineMode={offlineMode}
                />
              )}
            />
            <Route exact path="/bio" component={Bio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </ContentPanel>
        <Footer>
          <p onClick={switchVersion}>Copyright 2018</p>
        </Footer>
      </RootContainer>
    </Router>
  );
};

export default App;
