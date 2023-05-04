import React from "react";
import App from "./App";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import store from "../store/store";

import {
  initialiseApp,
  fetchArtworkList,
  fetchProjectList,
  fetchBioList
} from "../store/actions";

const offlineMode = false;

store.dispatch(initialiseApp());
store.dispatch(fetchArtworkList({ offlineMode: offlineMode }));
store.dispatch(fetchProjectList({ offlineMode: offlineMode }));
store.dispatch(fetchBioList({ offlineMode: offlineMode }));

function AppContainer() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
export default AppContainer;

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<AppContainer />);


