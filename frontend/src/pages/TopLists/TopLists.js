import React, { Component } from "react";
import Fetcher from "../../components/TopList/Fetcher";
import "./TopLists.scss"
import DataPlaceholder from "../../components/DataPlaceholder/DataPlaceholder";

/**
 * Charts component containing an example page with a D3 chart component "fetched" from BarChart.js.
 */
class TopLists extends Component {
    render() {
        return (
        <div>
            <div className="toplists_background"></div>
            <div>
                <DataPlaceholder overflowY="scroll">
                    <Fetcher />
                </DataPlaceholder>
            </div>
        </div>
        );
    }
}

export default TopLists;
