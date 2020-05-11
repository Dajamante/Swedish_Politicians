import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/Home/Home";
import TopLists from "../pages/TopLists/TopLists";
import About from "../pages/About/About";

const Routes = () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/toplists" component={TopLists} />
    <Route path="/about" component={About} />
    <Route component={Home} />
    <Redirect to="/home" />
  </Switch>
);

export default Routes;
