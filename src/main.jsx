import "./styles/main.css";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/app";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App>
        <h1>Hello React</h1>
      </App>
    </StrictMode>
  );
}
