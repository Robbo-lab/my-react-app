import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// // Fix error - slide 12
import "./styles/main.css";

// 2) Get a reference to the div with ID root
const element = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(element);
// Stage 6 ------
root.render(<App />);
