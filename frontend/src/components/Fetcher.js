import React, { Component, Fragment } from "react";
import axios from "axios";
import TopList from "./TopList";
import "react-dropdown/style.css";
import Select from "react-select";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'

const APIoptions = [
  { value: "resultSAMostPos", label: "Mest positiv" },
  { value: "resultSAMostNeg", label: "Mest negativ" },
  { value: "getMostAbsent", label: "Mest frånvaro vid votering" },
  {
    value: "getVotedAgainstPartiMode",
    label: "Flest röster mot snitt av det egna partiet",
  },
];

class Fetcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      error: null,
      QUERY_START: "2019-01-01",
      QUERY_STOP: "2020-03-20",
      isClearable: false,
      isDisabled: false,
      isLoading: false,
      isRtl: false,
      isSearchable: true,
      selectedOption: APIoptions[2],
      startDate: new Date(),
      endDate: new Date()
    };

    this.handleChange = (selectedOption, startDate, endDate) => {
      this.setState({ selectedOption });
      this.setState({ isLoading: true });
      //this.setState({ QUERY_START: moment(startDate).format('YYYY-MM-DD') });
      //this.setState({ QUERY_STOP: moment(endDate).format('YYYY-MM-DD')  });

      axios
        .get(
          "http://localhost:3000/" +
            this.state.selectedOption.value +
            "?startdate=" +
            this.state.QUERY_START +
            "&enddate=" +
            this.state.QUERY_STOP
        )
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
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:3000/" +
          this.state.selectedOption.value +
          "?startdate=" +
          this.state.QUERY_START +
          "&enddate=" +
          this.state.QUERY_STOP
      )
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

    return (
      <div>
        <DatePicker
          selected={ this.state.startDate }
          onChange={ this.handleChange }
          name="startDate"
          dateFormat="yyyy-MM-dd"
          inline
        />
        {" "}
        <DatePicker
          selected={ this.state.endDate }
          onChange={ this.handleChange }
          name="endDate"
          dateFormat="yyyy-MM-dd"
          inline
        />
        <br></br>
        {"http://localhost:3000/" +
          this.state.selectedOption.value +
          "?startdate=" +
          this.state.QUERY_START +
          "&enddate=" +
          this.state.QUERY_STOP}
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
