import React, { Component } from "react";
import axios from "axios";

const API = "http://ec2-3-81-166-212.compute-1.amazonaws.com/api/v1/result";
const DEFAULT_QUERY = "";

class Fetcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(API + DEFAULT_QUERY)
      .then(result =>
        this.setState({
          hits: result.data.hits,
          isLoading: false
        })
      )
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  }

  render() {
    const { hits } = this.state;
    return (
      <ul>
        {hits.map(hit =>
          <li key={hit.namn}>
            <br>{hit.namn} - {hit.avg}</br>
          </li>
        )}
      </ul>
    );
  }
}

export default Fetcher;
