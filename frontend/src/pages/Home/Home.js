import React, { Component } from "react";
import DataPlaceholder from "../../components/DataPlaceholder/DataPlaceholder";
import "./Home.scss";
import GraphFetcher from "../../components/Graph/GraphFetcher.js";

/**
 * Home component containing the first page of the site with logos and link to GitHub.
 */
class Home extends Component {
	render() {
		return (
			<div className="container">
				<DataPlaceholder>
					<GraphFetcher />
				</DataPlaceholder>
			</div>
		);
	}
}

export default Home;
