import React, { Component } from "react";
import "../stylesheets/stylesheet.scss";

class Home extends Component {
  render() {
    return (
      <div class="container">
        <div class="mainItem">
          <div style={{ fontSize: "40px" }}>MVK Influencers project</div>
          <small>In collaboration with</small>
          <br />
          <br />
          <a
            href="https://findwise.com/en"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={require("./logo270.png")} alt="Findwise logo"></img>
          </a>
          <br />
          <br />
          <small>
            <p>
              <center>
                View the project on GitHub:{" "}
                <a
                  href="https://gits-15.sys.kth.se/erikvan/MVK-influencers"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  gits-15.sys.kth.se/pages/pontuscm/mvk-react
                </a>
              </center>
            </p>
            <p>
              <center>Hosted on GitHub Pages</center>
            </p>
          </small>
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default Home;
