import React, { Component } from "react";
import test_data from "../data/test_data";
import SampleGraph from "../components/SampleGraph";
import dummy_graph_data from "../data/dummy_graph_data";
import dummy_graph_data2 from "../data/dummy_graph_data2";
import GraphFetcher from "../components/GraphFetcher"

/**
 * Sample component printing out info as an example from the test_data.json file.
 * <SampleGraph data={dummy_graph_data} data2={dummy_graph_data2}/>
 */
class Sample extends Component {
  render() {
    return (
      <div className="container">
        <div className="mainItem">
          <h1>Sample graph from local dummy_graph_data.json</h1>

          <GraphFetcher/>
          <br></br>
        
        </div>
      </div>
    );
  }
}

export default Sample;
