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
        <div className="bottom_background">
            <div className="toplists_background"></div>
            <div className="toplists_container">
                <DataPlaceholder overflowY="scroll">
                    <Fetcher />
                </DataPlaceholder>
            </div>
        </div>
        );
    }
}

export default Home;
