import "./../../styles/layout/_charts.scss";

import React, { Component } from "react";

import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";

import { Doughnut } from "react-chartjs-2";

export default class DoughnutChart extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.toggleDropdown = this.toggleDropdown.bind(this);
		this.state = {
			activeTab: "Last Year",
			dropdownOpen: false,
			chartsData: {
				labels: [
					"Websites",
					"Logo",
					"Social Media",
					"Adwords",
					"E-Commerce"
				],
				datasets: [
					{
						label: "Sales",
						backgroundColor: [
							"#25396e",
							"#5584ff",
							"#4b74e0",
							"#4164c2",
							"#3755a4"
						],
						data: [472, 383, 349, 194, 162]
					}
				]
			}
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
		return (
			<div className="charts">
				<div>
					<header className="charts-header">
						<h3 className="charts-header-title">Your Sales</h3>
						<Dropdown
							isOpen={this.state.dropdownOpen}
							toggle={this.toggleDropdown}
						>
							<DropdownToggle caret className="charts-header-btn">
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
					<Doughnut data={this.state.chartsData} />
				</div>
			</div>
		);
	}
}
