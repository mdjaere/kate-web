import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../store/store";

import {
  initialiseApp,
  fetchArtworkList,
  fetchProjectList
} from "../store/actions";

const offlineMode = false;

store.subscribe(console.log);
store.dispatch(initialiseApp());
store.dispatch(fetchArtworkList({ offlineMode: offlineMode }));
store.dispatch(fetchProjectList({ offlineMode: offlineMode }));

function AppContainer() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppContainer;

ReactDOM.render(<AppContainer />, document.getElementById("app"));
