import * as React from "react";
import { render } from "react-dom";
import App from "./components";

const rootEl = document.getElementById("root");

const x = new Promise(() => {
    console.log(42);
});

render(<App />, rootEl);
