import React from "react";
import ReactDOM from "react-dom";
import "./App/Layout/styles.css";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import App from "./App/Layout/App";
import * as serviceWorker from "./serviceWorker";
import ScrollToTop from "./App/Layout/ScrollToTop";
import "react-toastify/dist/ReactToastify.min.css";

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
