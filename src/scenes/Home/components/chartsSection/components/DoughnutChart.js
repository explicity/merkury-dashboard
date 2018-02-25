import React, { Component } from 'react';

import { Doughnut } from 'react-chartjs-2';

import MainDropdown from '../../../../../components/dropdown/MainDropdown.js';

export default class DoughnutChart extends Component {
	constructor(props) {
		super(props);

		this.updateData = this.updateData.bind(this);
		this.state = {
			name: 'Last Year'
		};
	}

	updateData = value => {
		this.setState({ name: value });
	};

	render() {
		const chartsLastData = {
			labels: [
				'Websites',
				'Logo',
				'Social Media',
				'Adwords',
				'E-Commerce'
			],
			datasets: [
				{
					label: 'Sales',
					backgroundColor: [
						'#25396e',
						'#5584ff',
						'#4b74e0',
						'#4164c2',
						'#3755a4'
					],
					data: [472, 383, 349, 194, 162]
				}
			]
		};

		const chartsThisData = {
			labels: [
				'Websites',
				'Logo',
				'Social Media',
				'Adwords',
				'E-Commerce'
			],
			datasets: [
				{
					label: 'Sales',
					backgroundColor: [
						'#25396e',
						'#5584ff',
						'#4b74e0',
						'#4164c2',
						'#3755a4'
					],
					data: [21, 704, 92, 672, 71]
				}
			]
		};

		return (
			<div className="charts">
				<header className="charts-header">
					<h3 className="charts-header-title">Your Sales</h3>
					<MainDropdown
						action="Perioud"
						activeTab="Last Year"
						anotherTab="This Year"
						updateData={this.updateData}
					/>
				</header>
				{this.state.name === 'Last Year' && (
					<Doughnut data={chartsLastData} />
				)}
				{this.state.name === 'This Year' && (
					<Doughnut data={chartsThisData} />
				)}
			</div>
		);
	}
}
