import React, { Component } from "react";
import Fetcher from "../../components/TopList/Fetcher";
import "./Home.scss"
import DataPlaceholder from "../../components/DataPlaceholder/DataPlaceholder";

/**
 * Charts component containing an example page with a D3 chart component "fetched" from BarChart.js.
 */
class Home extends Component {
	render() {
		return (
			<div>
				<div className="home_background"></div>
				<div>
					<DataPlaceholder overflowY="auto">
						<GraphFetcher />
					</DataPlaceholder>
				</div>
			</div>
		);
	}
}

export default Home;
