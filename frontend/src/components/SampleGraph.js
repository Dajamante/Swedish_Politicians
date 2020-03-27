import React, { Component } from "react";
import dummy_graph_data from "../data/dummy_graph_data";
import { ResponsiveLine } from '@nivo/line';

class SampleGraph extends Component {
    constructor() {
        super();
        this.state = {
          filterName: "",
          filterVehicle: ""
        };
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
        
        if (filteredDataByName == null) {
            filteredDataByName = dummy_graph_data
        }

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
                <ResponsiveLine
                    data={filteredDataByName}
                    margin={{ top: 20, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 15,
                        tickRotation: 0,
                        legend: 'transportation',
                        legendOffset: 36,
                        legendPosition: 'center'
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'count',
                        legendOffset: -40,
                        legendPosition: 'center'
                    }}
                    //colors={{ scheme: 'nivo' }} // this doesn't seem to work
                    lineWidth={3}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={3}
                    pointBorderColor={{ from: 'serieColor', modifiers: [] }}
                    enablePointLabel={true}
                    pointLabel="y"
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 100,
                            translateY: 0,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
        )
    }
}

export default SampleGraph;