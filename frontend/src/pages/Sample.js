import React, { Component } from "react";
import SampleGraph from "../components/SampleGraph";
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
          <h1>Graph displaying how stuff changes over time</h1>

          <GraphFetcher/>
          <br></br>

        </div>
      </div>
    );
  }
}

export default Sample;
