import React, { Component } from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar"
import Routes from "./routes/Routes"

/**
 * Main class App returning the navigation bar component and the routes component. 
 */
class App extends Component {
  render () {
    return (
      <div className="App">
        <NavigationBar />
        <Routes />
      </div>
    );
  }
}

export default App;
