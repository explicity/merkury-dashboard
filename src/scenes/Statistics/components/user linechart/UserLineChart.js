import React, { Component } from "react";

import { Line } from "react-chartjs-2";

export default class UserLineChart extends Component {
	render() {
		const userLineData = {
			labels: ["", "", "", "", "", "", "", "", ""],
			datasets: [
				{
					data: [320, 280, 400, 350, 710, 420, 480, 280, 350, 300],
					label: "Last Year",
					borderColor: "#3e95cd",
					fill: false
				}
			]
		};

		return (
			<div className="charts">
				<header>
					<h3 className="charts-header-title">Active users</h3>
				</header>
				<Line data={userLineData} />
			</div>
		);
	}
}
