// src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Explicitly specifying the .jsx extension
import "./index.css"; // Importing your CSS file here

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
