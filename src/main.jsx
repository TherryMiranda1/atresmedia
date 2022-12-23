import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { SiteContainer } from "./state/SiteContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SiteContainer>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SiteContainer>
  </React.StrictMode>
);
