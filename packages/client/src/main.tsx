import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { mapInit, ymaps } from "./common/utils/map";
import "./index.css";
ymaps.ready(mapInit);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
