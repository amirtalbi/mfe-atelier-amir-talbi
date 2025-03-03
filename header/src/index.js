import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

const render = () => {
  ReactDOM.render(<Header />, document.getElementById("header"));
};

if (process.env.NODE_ENV === "development") {
  const { bootstrap } = require("./bootstrap");
  bootstrap().then(render);
} else {
  render();
}
