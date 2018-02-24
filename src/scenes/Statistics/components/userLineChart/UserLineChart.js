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
			<div className="charts userchart">
				<header className="charts-header">
					<h3 className="charts-header-title">Active users</h3>
					<div>
						<button className="charts-header-btn">
							<i className="fa fa-pencil" aria-hidden="true" />
							<span className="sr-only">Edit</span>
						</button>
						<button className="charts-header-btn">
							<i className="fa fa-trash" aria-hidden="true" />
							<span className="sr-only">Delete</span>
						</button>
					</div>
				</header>
				<Line data={userLineData} />
			</div>
		);
	}
}
