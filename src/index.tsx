
import React from "react";
import ReactDOM from "react-dom";

// styles
import "../src/assets/css/nucleo-icons.css";
import "../src/assets/scss/blk-design-system-pro-react.scss?v1.1.0";
import "../src/assets/demo/demo.css";
import "../src/assets/demo/react-demo.css";
import Website from "./views/Website/";
import { BrowserRouter, Route, Switch } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Website} />

      {/* <Redirect from="/" to="/presentation" /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
