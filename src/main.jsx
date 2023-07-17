import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./style/global.scss";
// import './style/index.css'
import { BrowserRouter } from "react-router-dom";
const App = lazy(() =>
  import("./App.jsx")
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
