import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import calculator from "./reducer";
import App from "./App";

let destination = document.querySelector("#container");

// Store
let store = createStore(calculator);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  destination
);
