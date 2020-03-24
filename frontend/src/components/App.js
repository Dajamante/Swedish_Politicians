import React, { Component } from "react";
import "../stylesheets/App.scss";
import NavigationBar from "./NavigationBar";
import Routes from "./Routes";

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
