import React, { Component } from "react";
import { ResponsiveLine } from "@nivo/line";

class Graph extends Component {
	/*   constructor() {
      super();
  } */
	render() {
		return (
			<ResponsiveLine
				data={this.props.data}
				margin={{ top: 20, right: 110, bottom: 50, left: 60 }}
				xScale={
					{
						//type: "time",
						//format: "yyyy-MM-dd",
						//precision: "day",
					}
				}
				//xFormat="time:yyyy-MM-dd"
				yScale={{
					type: "linear",
					min: "auto",
					max: "auto",
					stacked: false,
					reverse: false,
				}}
				axisTop={null}
				axisRight={null}
				axisBottom={{
					orient: "bottom",
					tickSize: 5,
					tickPadding: 15,
					tickRotation: 90,
					legend: "datum",
					legendOffset: 36,
					legendPosition: "right",
					//format: "d",
					//tickValues: "every 2 days",
				}}
				axisLeft={{
					orient: "left",
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: "",
					legendOffset: -40,
					legendPosition: "center",
				}}
				//colors={{ scheme: 'nivo' }} this doesn't seem to work
				lineWidth={3}
				pointSize={10}
				pointColor={{ theme: "background" }}
				pointBorderWidth={3}
				pointBorderColor={{ from: "serieColor", modifiers: [] }}
				enablePointLabel={true}
				pointLabel="y"
				pointLabelYOffset={-12}
				useMesh={true}
				legends={[
					{
						anchor: "bottom-right",
						direction: "column",
						justify: false,
						translateX: 100,
						translateY: 0,
						itemsSpacing: 0,
						itemDirection: "left-to-right",
						itemWidth: 80,
						itemHeight: 20,
						itemOpacity: 0.75,
						symbolSize: 12,
						symbolShape: "circle",
						symbolBorderColor: "rgba(0, 0, 0, .5)",
						effects: [
							{
								on: "hover",
								style: {
									itemBackground: "rgba(0, 0, 0, .03)",
									itemOpacity: 1,
								},
							},
						],
					},
				]}
			/>
		);
	}
}
export default Graph;
