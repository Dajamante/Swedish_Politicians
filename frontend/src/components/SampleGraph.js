import React, { Component } from "react";
import dummy_graph_data from "../data/dummy_graph_data";
import dummy_graph_data2 from "../data/dummy_graph_data2";
import Graph from "./Graph"

class SampleGraph extends Component {
    constructor() {
        super();
        this.state = {
          graphType: 0,
          filterName: "",
          filterVehicle: ""
        };
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
      if(this.state.graphType == 0){
        this.setState({ graphType: 1 })
      } else {
        this.setState({ graphType: 0 })
      }
    }

    updateFilterName(event) {
        this.setState({ filterName: event.target.value.substring(0, 50) });
    }

    //not used yet
    updateFilterVehicle(event) {
        this.setState({ filterVehicle: event.target.value.substring(0, 50) });
    }

    render(){
        let filteredDataByName = dummy_graph_data.filter(listPost => {
            return (
              listPost.id
                .toLowerCase()
                .indexOf(this.state.filterName.toLowerCase()) !== -1
            );
        });
        let filteredDataByName2 = dummy_graph_data2.filter(listPost => {
            return (
              listPost.id
                .toLowerCase()
                .indexOf(this.state.filterName.toLowerCase()) !== -1
            );
        });

        if (filteredDataByName.length == 0) {
            return (
                <div style={{ height: '500px', width: '1000px' }}>
                Filter by name of country:{" "}
                <input
                    type="text"
                    value={this.state.filterName}
                    onChange={this.updateFilterName.bind(this)}
                />
                <button onClick={this.handleClick}>Toggle Dataset</button>
                </div>
            )
        }
        else if(this.state.graphType == 0){
            return (
                <div style={{ height: '500px', width: '1000px' }}>
                    Filter by name of country:{" "}
                    <input
                        type="text"
                        value={this.state.filterName}
                        onChange={this.updateFilterName.bind(this)}
                    />
    {/*                 Filter by vehicle:{" "}
                    <input
                        type="text"
                        value={this.state.filterVehicle}
                        onChange={this.updateFilterVehicle.bind(this)}
                    /> */}
                    <button onClick={this.handleClick}>Toggle Dataset</button>
                    <Graph  data = {filteredDataByName}/>
                </div>
            )
        } else {
          return (
            <div style={{ height: '500px', width: '1000px' }}>
                Filter by name of country:{" "}
                <input
                    type="text"
                    value={this.state.filterName}
                    onChange={this.updateFilterName.bind(this)}
                />
                <button onClick={this.handleClick}>Toggle Dataset</button>
                <Graph  data = {filteredDataByName2}/>
            </div>
          )
        }
    }
}

export default SampleGraph;
