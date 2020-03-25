import React, { Component } from "react";
import BarChart from "./BarChart";
import * as d3 from "d3";
import DummyData from "../data/dummy_data.json";
import TopList from "./TopList";

var listPosts = DummyData

/**
 * Charts component containing an example page with a D3 chart component "fetched" from BarChart.js.
 */
class Charts extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="mainItem">
          <h1>Dummy data top list</h1>
          <TopList listPosts={listPosts}/>
        </div>
      </div>
    );
  }
}

export default Charts;
