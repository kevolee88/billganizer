import React from "react";
import ReactDOM, { render } from "react-dom";
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from "react-router";
import "../public/less/main.less";
import App from "./App.js";

// import containers
import Dashboard from "./containers/Dashboard/Dashboard";
import AddBill from "./containers/AddBill/AddBill";
import Bill from "./containers/Bill/Bill";

const app = document.getElementById('root');

render(
  <Router history={hashHistory}>
    <Route path="/" component={ App }>
      <IndexRedirect to="/dashboard" />

      <Route path="/dashboard">
        <IndexRoute component={ Dashboard } />
        <Route path='/dashboard/add-bill' component={ AddBill }></Route>
        <Route path='/dashboard/bill/:bill' component={ Bill }></Route>
      </Route>
    </Route>
  </Router>,
  app
);
