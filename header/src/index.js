import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import('./bootstrap');

const render = () => {
  ReactDOM.render(<Header />, document.getElementById("header"));
};

if (process.env.NODE_ENV === "development") {
  import("./bootstrap")
    .then(({ bootstrap }) => {
      bootstrap().then(render);
    })
    .catch(err => {
      console.error("Error bootstrapping header application:", err);
    });
} else {
  render();
}
