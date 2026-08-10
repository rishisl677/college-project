

// This file is the switch that turns the whole app on.
// It finds the empty <div id="root"> inside index.html
// and draws our <App /> inside it.
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  
    <App />
  
);