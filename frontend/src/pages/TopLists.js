import React, { Component } from "react";
import Fetcher from "../components/Fetcher";

/**
 * Charts component containing an example page with a D3 chart component "fetched" from BarChart.js.
 */
class TopLists extends Component {
  render() {
    return (
      <div className="container">
        <div className="mainItem">
          <h1>
            Rubrik för topplistor, som väljs via dropdown nedtill. Men rubriken
            kommer inte ändras för det... ;)
          </h1>
          <Fetcher />
        </div>
      </div>
    );
  }
}

export default TopLists;