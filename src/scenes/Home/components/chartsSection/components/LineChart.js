import React, { Component } from "react";

import { Line } from "react-chartjs-2";

import MainDropdown from "../../../../../components/dropdown/MainDropdown.js";

export default class LineChart extends Component {
	constructor(props) {
		super(props);

		this.updateData = this.updateData.bind(this);
		this.state = {
			name: "Last Year"
		};
	}

	updateData = value => {
		this.setState({ name: value });
	};
	render() {
		const chartsLastData = {
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

		const chartsThisData = {
			labels: ["", "", "", "", "", "", "", "", ""],
			datasets: [
				{
					data: [220, 280, 700, 250, 210, 320, 280, 380, 650, 300],
					label: "This Year",
					borderColor: "#3e95cd",
					fill: false
				}
			]
		};

		return (
			<div className="charts">
				<header className="charts-header">
					<h3 className="charts-header-title">Report</h3>
					<MainDropdown
						action="Perioud"
						activeTab="Last Year"
						anotherTab="This Year"
						updateData={this.updateData}
					/>
				</header>
				{this.state.name === "Last Year" && (
					<Line data={chartsLastData} />
				)}
				{this.state.name === "This Year" && (
					<Line data={chartsThisData} />
				)}
			</div>
		);
	}
}
