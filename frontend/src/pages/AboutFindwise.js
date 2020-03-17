import React, { Component } from "react";

class AboutFindwise extends Component {
  render() {
    return (
      <div className="container">
        <div className="mainItem">
          <a
            href="https://findwise.com/en"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={require("./logo270.png")} alt="Findwise logo"></img>
          </a>
          <br />
          <br />
          Vendor independent IT consultants specialised in enterprise search,
          information management,
          <br />
          analytics and Big Data. With training, guidance and customised
          applications we can help you find,
          <br />
          analyse and act upon information.
          <br />
          <br />
          <a
            href="https://findwise.com/en"
            rel="noopener noreferrer"
            target="_blank"
          >
            findwise.com
          </a>
        </div>
      </div>
    );
  }
}

export default AboutFindwise;
