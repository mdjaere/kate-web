import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../store/store";

import * as actions from "../store/actions";

store.subscribe(console.log);
store.dispatch(actions.fetchPaintingList({offlineMode: true}));
store.dispatch(actions.fetchProjectList({offlineMode: true}));

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offlineMode: true,
      paintingList: [],
      projectList: [],
      activeProject: null
    };
  }

  switchVersion() {
    console.log("switching version");
    this.setState({ offlineMode: !this.state.offlineMode });
  }

  setPaintingList(posts) {
    console.log("Setting painting list");
    this.setState({ paintingList: posts });
  }

  setActiveProject(project) {
    console.log("Setting active project");
    this.setState({ activeProject: project });
  }

  setProjectList(posts) {
    console.log("Setting project list");
    this.setState({ projectList: posts });
  }

  render() {
    return (
      <Provider store={store}>
        <App
          {...this.state}
          switchVersion={this.switchVersion.bind(this)}
          setPaintingList={this.setPaintingList.bind(this)}
          setActiveProject={this.setActiveProject.bind(this)}
          setProjectList={this.setProjectList.bind(this)}
        />
      </Provider>
    );
  }
}

export default AppContainer;

ReactDOM.render(<AppContainer />, document.getElementById("app"));
