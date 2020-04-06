import React, { Component, Fragment } from "react";
import axios from "axios";
import TopList from "./TopList";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Select from "react-select";

//const API = "http://localhost:3000/resultSAMostPos?startdate=";
//const DEFAULT_QUERY_START = "2019-01-01";
//const DEFAULT_QUERY_STOP = "2020-03-20";

const APIoptions = [
  { value: "resultSAMostPos", label: "Mest positiv" },
  { value: "resultSAMostNeg", label: "Mest negativ" },
  { value: "getMostAbsent", label: "Mest frånvaro vid votering" },
  { value: "getVotedAgainstPartiMode", label: "Flest röster mot snitt av det egna partiet" },
  
];

/* const APIoptions = [
  'resultSAMostPos',
  'resultSAMostNeg',
];
const defaultOption = APIoptions[0]; */

class Fetcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      isLoading: false,
      error: null,
      QUERY_START: "2019-01-01",
      QUERY_STOP: "2020-03-20",
      isClearable: false,
      isDisabled: false,
      isLoading: false,
      isRtl: false,
      isSearchable: true,
      selectedOption: APIoptions[2],
    };

    this.handleChange = (selectedOption) => {
      this.setState({ selectedOption });
      this.setState({ isLoading: true });
    };
  }
  
  componentDidMount() {

    axios
      .get("http://localhost:3000/" + this.state.selectedOption.value + "?startdate=" + this.state.QUERY_START + "&enddate=" + this.state.QUERY_STOP)
      .then((result) =>
        this.setState({
          list: result.data,
          isLoading: false,
        })
      )
      .catch((error) =>
        this.setState({
          error,
          isLoading: false,
        })
      );
  }

  render() {
    const {
      isClearable,
      isSearchable,
      isDisabled,
      isLoading,
      isRtl,
    } = this.state;
    const { selectedOption } = this.state;

    this.componentDidMount()

    return (
      <div>
        {"http://localhost:3000/" + this.state.selectedOption.value + "?startdate=" + this.state.QUERY_START + "&enddate=" + this.state.QUERY_STOP}
        <br></br>
        <Fragment>
          <Select
            className="dropDown"
            classNamePrefix="select"
            defaultValue={APIoptions[1]}
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            name="color"
            options={APIoptions}
            value={selectedOption}
            onChange={this.handleChange}
          />
        </Fragment>
        <br></br>
        <TopList listPosts={this.state.list} />
      </div>
    );
  }
}
export default Fetcher;
