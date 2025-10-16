import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import React from "react";


const entryPoint = document.getElementById("root");
// @ts-ignore
//ReactDOM.createRoot(entryPoint).render(<App />);
ReactDOM.createRoot(entryPoint).render(React.createElement(App, {}));
