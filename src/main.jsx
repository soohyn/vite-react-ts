import "./styles/main.css";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <h1 className="hello">안녕!</h1>
    </StrictMode>
  );
}