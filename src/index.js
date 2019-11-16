import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h3>React App</h3>, document.getElementById("root"));

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}
