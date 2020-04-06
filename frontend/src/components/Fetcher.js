import React, { Component } from "react";
import axios from "axios";
import TopList from "./TopList";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Select from 'react-select'

//const API = "http://localhost:3000/resultSAMostPos?startdate=";
//const DEFAULT_QUERY_START = "2019-01-01";
//const DEFAULT_QUERY_STOP = "2020-03-20";

const options = [
  { value: 'resultSAMostPos', label: 'Positive' },
  { value: 'resultSAMostNeg', label: 'Negative' }
];

const APIoptions = [
  'resultSAMostPos',
  'resultSAMostNeg',
];
const defaultOption = APIoptions[0];

class Fetcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      isLoading: false,
      error: null,
      chosenAPI: 0,
      QUERY_START: "2019-01-01",
      QUERY_STOP: "2020-03-20",
    };

    this._onSelect = {
      
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get("http://localhost:3000/" + APIoptions[this.chosenAPI] + "?startdate=" + this.QUERY_START + "&enddate=" + this.QUERY_STOP)
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
      <div>
        <Dropdown className="dropDown" options={APIoptions} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
        <br></br>
        <TopList listPosts={this.state.list} />
      </div>
    )
  }
}
export default Fetcher;