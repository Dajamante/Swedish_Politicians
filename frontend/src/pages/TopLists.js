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
          <h1>Most absent top list fetched with API</h1>
          <Fetcher />
        </div>
      </div>
    );
  }
}

export default TopLists;
