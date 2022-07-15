import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import postReducer from "./store/reducers/postReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
const store = createStore(postReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </Provider>
);
