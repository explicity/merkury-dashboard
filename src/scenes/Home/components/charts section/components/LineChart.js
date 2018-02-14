import React, { Component } from "react";

import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";

import { Line } from "react-chartjs-2";

export default class LineChart extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.toggleDropdown = this.toggleDropdown.bind(this);
		this.state = {
			activeTab: "Last Year",
			dropdownOpen: false
		};
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}

	toggleDropdown() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}
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
					<Dropdown
						isOpen={this.state.dropdownOpen}
						toggle={this.toggleDropdown}
					>
						<DropdownToggle caret>
							<span>Perioud: </span>
							<span className="active">
								{this.state.activeTab}
							</span>
						</DropdownToggle>
						<DropdownMenu>
							<DropdownItem
								className={`${
									this.state.activeTab === "Last Year"
										? "disabled"
										: ""
								}`}
								onClick={() => {
									this.toggle("Last Year");
								}}
							>
								Last Year
							</DropdownItem>
							<DropdownItem
								className={`${
									this.state.activeTab === "This Year"
										? "disabled"
										: ""
								}`}
								onClick={() => {
									this.toggle("This Year");
								}}
							>
								This Year
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</header>
				{this.state.activeTab === "Last Year" && (
					<Line data={chartsLastData} />
				)}
				{this.state.activeTab === "This Year" && (
					<Line data={chartsThisData} />
				)}
			</div>
		);
	}
}