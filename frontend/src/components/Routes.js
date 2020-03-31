import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import AboutTeam from "../pages/AboutTeam";
import AboutProject from "../pages/AboutProject";
import AboutFindwise from "../pages/AboutFindwise";
import Sample from "../pages/Sample";

/**
 * Routes component containing the switch with paths to the different pages to be displayed in the "main" section of the website.
 */
const Routes = () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/aboutTeam" component={AboutTeam} />
    <Route path="/aboutProject" component={AboutProject} />
    <Route path="/aboutFindwise" component={AboutFindwise} />
    <Route path="/sample" component={Sample} />
    <Redirect to="/home" />
  </Switch>
);

export default Routes;
