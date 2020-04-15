import React, { Component } from "react";
import Graph from "./Graph";

class SampleGraph extends Component {
	constructor() {
		super();
	}

	render() {
		let data = this.props.data;

		if (data.length !== 0) {
			return (
				<div style={{ height: "500px", width: "1000px" }}>
					<Graph data={data} />
				</div>
			);
		} else {
			return <div />;
		}
	}
}

export default SampleGraph;
