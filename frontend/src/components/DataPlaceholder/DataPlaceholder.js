import React from "react";
import "./DataPlaceholder.scss";
import GraphFetcher from "../Graph/GraphFetcher.js";

const DataPlaceholder = ({ children, overflowY }) => {
	return (
		<>
			<div className="mainWindowTopLine" />
			<div className="mainWindow" style={{ overflowY: overflowY }}>
				{children}
				<GraphFetcher />
			</div>
		</>
	);
};

export default DataPlaceholder;
