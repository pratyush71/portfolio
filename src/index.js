import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // Ensure App.js is correctly imported
import "./index.css";     // Ensure styles are imported

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
