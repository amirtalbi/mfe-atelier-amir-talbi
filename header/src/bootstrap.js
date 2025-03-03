import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

const bootstrap = () => {
  ReactDOM.render(<Header />, document.getElementById("header"));
};

export { bootstrap };
