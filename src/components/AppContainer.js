import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../store/store";

import * as actions from "../store/actions";

const offlineMode = true;

store.subscribe(console.log);
store.dispatch(actions.fetchPaintingList({ offlineMode }));
store.dispatch(actions.fetchProjectList({ offlineMode }));

class AppContainer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default AppContainer;

ReactDOM.render(<AppContainer />, document.getElementById("app"));
