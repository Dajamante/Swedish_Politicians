import React, { Component } from "react";
import axios from "axios";
import TopList from "./TopList";

const API = "http://localhost:3000/getMostAbsent?startdate=";
const DEFAULT_QUERY_START = "2019-01-01";
const DEFAULT_QUERY_STOP = "2020-03-20";

class Fetcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(API + DEFAULT_QUERY_START + "&enddate=" + DEFAULT_QUERY_STOP)
      .then(result =>
        this.setState({
          list: result.data,
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
    return (
      <TopList listPosts={this.state.list}/>
    );
  }
}

export default Fetcher;
