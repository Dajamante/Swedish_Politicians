import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/Home/Home";
import TopLists from "../pages/TopLists/TopLists";
import AboutTeam from "../pages/AboutTeam";
import AboutProject from "../pages/AboutProject";
import AboutFindwise from "../pages/AboutFindwise";

const Routes = () => (
	<Switch>
		<Route path="/home" component={Home} />
		<Route path="/toplists" component={TopLists} />
		<Route path="/aboutTeam" component={AboutTeam} />
		<Route path="/aboutProject" component={AboutProject} />
		<Route path="/aboutFindwise" component={AboutFindwise} />
		<Route component={Home} />
		<Redirect to="/home" />
	</Switch>
);

export default Routes;
