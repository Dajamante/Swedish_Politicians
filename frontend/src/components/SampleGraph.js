import React, { Component } from "react";
import Graph from "./Graph"

class SampleGraph extends Component {
    constructor() {
        super();
        this.state = {
          graphType: 0,
          filterName: ""
        };
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
      if(this.state.graphType === 0){
        this.setState({ graphType: 1 })
      } else {
        this.setState({ graphType: 0 })
      }
    }

    updateFilterName(event) {
        this.setState({ filterName: event.target.value.substring(0, 50) });
    }

    render(){
        let filteredDataByName = this.props.data.filter(listPost => {
            return (
              listPost.id
                .toLowerCase()
                .indexOf(this.state.filterName.toLowerCase()) !== -1
            );
        });

        if (filteredDataByName.length === 0) {
            return (
                <div style={{ height: '500px', width: '1000px' }}>
                Filter by name of country:{" "}
                <input
                    type="text"
                    value={this.state.filterName}
                    onChange={this.updateFilterName.bind(this)}
                />
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
                <Graph  data = {filteredDataByName}/>
            </div>
          )
        }
    }
}

export default SampleGraph;
