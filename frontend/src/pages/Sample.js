import React, { Component } from "react";
import test_data from "../data/test_data";

class Sample extends Component {
  render() {
    function getJson(string) {
      return fetch(string).then(response => response.json());
    }

    return (
      <div class="container">
        <div class="mainItem">
          <h1>Sample text from json file</h1>
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
