import "./public-path";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Link } from "react-router-dom";

function render(props) {
  const { container } = props;
  ReactDOM.render(
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? "/react" : "/"}>
      <App />
    </BrowserRouter>,
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("[react17] react app bootstraped");
}

export async function mount(props) {
  console.log("[react17] props from main framework", props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}
