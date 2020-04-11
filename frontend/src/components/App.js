import React, { Component } from "react";
import {HashRouter, withRouter} from 'react-router-dom'
import "../stylesheets/App.scss";
import NavigationBar from "./NavigationBar";
import Routes from "./Routes";

/**
 * Main class App returning the navigation bar component and the routes component.
 */
class App extends Component {
  render() {
    var RoutesSync = withRouter(Routes)
    return (
      <div className="App">
        <HashRouter>
          <NavigationBar />
          <RoutesSync />
        </HashRouter>
      </div>
    );
  }
}

export default App;
