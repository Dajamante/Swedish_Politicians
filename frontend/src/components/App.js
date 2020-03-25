import React, { Component } from "react";
import "./App.css";
import NavigationBar from "./NavigationBar";
import Routes from "./Routes";

/**
 * Main class App returning the navigation bar component and the routes component.
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Routes />
      </div>
    );
  }
}

export default App;
