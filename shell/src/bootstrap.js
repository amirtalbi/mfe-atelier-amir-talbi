import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const start = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("app")
  );
};

export { start };
