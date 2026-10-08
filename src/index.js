import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
// import ContextApp from "./ContextApp.js";
// import DrillingApp from "./DrillingApp.js"
import "bulma/css/bulma.min.css";

createRoot(document.getElementById("root")).render(<App />);

// root.render(<ContextApp />);
// root.render(<DrillingApp />);
