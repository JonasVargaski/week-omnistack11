import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer, ToastPosition } from "react-toastify";
import App from "./App";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer position={ToastPosition.BOTTOM_LEFT} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

