import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./app";

const items = ["hey", "hello", "bonjour", "holla"];

ReactDOM.render(<App items={items}/>, document.getElementById("react-app"));
