import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/root";
import { Authenticator } from "./componets/Authenticator";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
  reducer: rootReducer,
});

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <Authenticator>
        <App />
      </Authenticator>
    </Provider>
  // </React.StrictMode>
);
