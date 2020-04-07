import React, { Component } from "react";
import test_data from "../data/test_data";
import SampleGraph from "../components/SampleGraph";

/**
 * Sample component printing out info as an example from the test_data.json file.
 */
class Sample extends Component {
  render() {
    return (
      <div class="container">
        <div class="mainItem">
          <h1>Sample graph from local dummy_graph_data.json</h1>
          <SampleGraph />
          <br></br>
          <h1>Sample text from local test_data.json</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: test_data.anforande.anforandetext
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Sample;
