import React, { Component } from "react";
import Graph from "./Graph";

class SampleGraph extends Component {
    constructor() {
        super();
        this.state = {
            filterName: "",
        };
    }

    updateFilterName(event) {
        this.setState({ filterName: event.target.value.substring(0, 50) });
    }

    render() {
        let filteredDataByName = this.props.data.filter((listPost) => {
            return (
                listPost.id
                    .toLowerCase()
                    .indexOf(this.state.filterName.toLowerCase()) !== -1
            );
        });

        if (filteredDataByName.length !== 0) {
            return (
                <div style={{ height: "500px", width: "1000px" }}>
                    <Graph data={filteredDataByName} />
                </div>
            );
        } else {
            return <div />;
        }
    }
}

export default SampleGraph;
