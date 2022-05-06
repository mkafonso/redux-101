import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App";
import { OtherPage } from "./OtherPage";
import { store } from "./redux/modules/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <hr />
      <OtherPage />
    </Provider>
  </React.StrictMode>
);
