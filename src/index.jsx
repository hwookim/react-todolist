import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./main/App";
import store from "./main/redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
