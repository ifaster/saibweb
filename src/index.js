import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter basename={process.env.REACT_APP_PUBLIC_URL}>
      <App />
      <GlobalStyles />
    </HashRouter>
  </React.StrictMode>
);
