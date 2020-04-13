import React, { Component, Fragment } from "react";
import axios from "axios";
import "react-dropdown/style.css";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import {createList} from './graphListBuilder.js'
import SampleGraph from "./SampleGraph";

const ledamotOptions = [{value:123, label:"hello"}, {value:122, label:"tst"}] //createList("2019-01-01", "2020-03-20", "absent");
const statOptions = [
  {value:"posneg", label:"Positivitet över tid"},
  {value:"absent", label:"Frånvaro över tid"},
  {value:"votedagainst", label:"Partiloyalitet över tid"}
]

function convertIntoGraphData(list, startDate, endDate){
  let res = []
  let id = 0
  for(const person of list){
    let data = []
    let date = new Date(startDate)
    let i = 0
    let j = 0
    for(;date <= new Date(endDate); date.setDate(date.getDate() + 1)){
      if(person[j] == null){
        data[i] = {x:date.getDate().toString(), y:null}
      }
      else if(new Date(person[j].datum).getTime() === date.getTime()){
        data[i] = {x:new Date(person[j].datum).getDate(), y:person[j].resultat}
        j++
      } else {
        data[i] = {x:date.getDate().toString(), y:null}
      }
      i++
    }
    res.push({id:"" +id, color:"hsl(230, 70%, 50%)", data:data}) //färg och id (namn) måste implementeras
    id++
  }
  return res
}

class GraphFetcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],

      error: null,
      QUERY_START: "2020-01-01",
      QUERY_STOP: "2020-03-20",
      QUERY_TYPE: "absent",
      isClearable: false,
      isDisabled: false,
      isLoading: false,
      isRtl: false,
      isSearchable: true,
      selectedPolitician:  ledamotOptions[0],
      selectedStat: statOptions[0],
      startDate: new Date(),
      stopDate: new Date(),
    };
    this.handlechange1 = (selectedPolitician) => {
      this.setState({ selectedPolitician });
      this.setState({ isLoading: true }, () => this.componentDidMount());
    };
    this.handlechange2 = (selectedStat) => {
      this.setState({ selectedStat });
      this.setState({ isLoading: true }, () => this.componentDidMount());
    };
  }

  handleStartDateChange = (startDate) => {
    const { selectedPolitician } = this.state;
    this.setState({ startDate });
    this.setState({ QUERY_START: moment(startDate).format("YYYY-MM-DD") }, () =>
      this.handlechange1(selectedPolitician)
    );
    //ledamotOptions = createList(this.state.QUERY_START, this.state.QUERY_STOP, this.state.QUERY_TYPE);
  };

  handleStopDateChange = (stopDate) => {
    const { selectedPolitician } = this.state;
    this.setState({ stopDate });
    this.setState({ QUERY_STOP: moment(stopDate).format("YYYY-MM-DD") }, () =>
      this.handlechange1(selectedPolitician)
    );
    //ledamotOptions = createList(this.state.QUERY_START, this.state.QUERY_STOP, this.state.QUERY_TYPE);
  };


  // Måste ändras sen för att matcha hur apin kommer att se ut.
  componentDidMount() {
    this.setState({list: [[{datum:'2020-03-01', resultat:'4'},{datum:'2020-03-02', resultat:'15'}, {datum:'2020-03-03', resultat:'13'},{datum:'2020-03-04', resultat:'14'}],
                         [{datum:'2020-03-01', resultat:'5'},{datum:'2020-03-02', resultat:'1'}, {datum:'2020-03-03', resultat:'3'}]]})
    //axios
  //    .get(
    //    "http://ec2-3-81-166-212.compute-1.amazonaws.com/api/v1/" +
    //      "getResultOverTime" +
  //        "?type=" +
  //        this.state.selectedStat +
  //        "&personid=" +
  //        this.state.selectedPolitician.value
  //    )
  //    .then((result) =>
  //      this.setState({
  //        list: result.data,
  //        isLoading: false,
//        })
  //    )
  //    .catch((error) =>
  //      this.setState({
//          error,
  //        isLoading: false,
  //      })
  //    );
  }

  render() {
    const {
      isClearable,
      isSearchable,
      isDisabled,
      isLoading,
      isRtl,
    } = this.state;
    const { selectedPolitician } = this.state;
    const { selectedStat } = this.state;

    return (
      <div className="listPost">
        <div>
          Startdatum:{" "}
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleStartDateChange}
            name="startDate"
            dateFormat="yyyy-MM-dd"
          />
        </div>
        <p> </p>
        <div>
          Stoppdatum:{" "}
          <DatePicker
            selected={this.state.stopDate}
            onChange={this.handleStopDateChange}
            name="stopDate"
            dateFormat="yyyy-MM-dd"
          />
        </div>

        <br></br>
        <Fragment>
          <Select
            className="dropDown"
            classNamePrefix="select"
            defaultValue={statOptions[0]}
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={false}
            name="color"
            options={statOptions}
            value={selectedStat}
            onChange={this.handlechange2}
          />
        </Fragment>
        <Fragment>
          <Select
            className="dropDown"
            classNamePrefix="select"
            defaultValue={ledamotOptions[1]}
            isDisabled={isDisabled}
            isMulti
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            name="color"
            options={ledamotOptions}
            value={selectedPolitician}
            onChange={this.handlechange1}
          />
        </Fragment>
        <br></br>
         <SampleGraph data={convertIntoGraphData(this.state.list, this.state.QUERY_START, this.state.QUERY_STOP)}/>
      </div>
    );
  }
}
export default GraphFetcher;
