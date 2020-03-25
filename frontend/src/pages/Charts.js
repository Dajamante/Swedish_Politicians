import React, { Component } from "react";
import BarChart from "./BarChart";
import * as d3 from "d3";

/**
 * Charts component containing an example page with a D3 chart component "fetched" from BarChart.js.
 */
class Charts extends Component {
  render() {
    return (
      <div className="container">
        <div className="mainItem">
          <h3>Test d3 chart</h3>
          <BarChart />
        </div>
      </div>
    );
  }
}

export default Charts;
