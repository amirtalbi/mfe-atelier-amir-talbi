import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import('./bootstrap');

const render = () => {
  ReactDOM.render(<Header />, document.getElementById("header"));
};

if (process.env.NODE_ENV === "development") {
  bootstrap().then(render);
} else {
  render();
}
