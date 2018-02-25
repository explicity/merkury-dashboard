import React, { Component } from 'react';

import { Line } from 'react-chartjs-2';

import MainDropdown from '../../../../../components/dropdown/MainDropdown.js';

export default class LineChart extends Component {
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
				'JAN',
				'FEB',
				'MAR',
				'APR',
				'MAY',
				'JUN',
				'JUL',
				'AUG',
				'SEP',
				'OCT'
			],
			datasets: [
				{
					data: [320, 280, 400, 350, 710, 420, 480, 280, 350, 300],
					borderColor: '#3e95cd',
					fill: false
				}
			]
		};

		const chartsThisData = {
			labels: [
				'JAN',
				'FEB',
				'MAR',
				'APR',
				'MAY',
				'JUN',
				'JUL',
				'AUG',
				'SEP',
				'OCT'
			],
			datasets: [
				{
					data: [220, 280, 700, 250, 210, 320, 280, 380, 650, 300],
					borderColor: '#3e95cd',
					fill: false
				}
			]
		};

		const options = {
			scaleShowLabels: false,
			legend: {
				display: false
			},
			elements: { point: { radius: 0 } },
			scales: {
				xAxes: [
					{
						gridLines: {
							color: '#e1e2e5'
						},
						ticks: {
							display: false
						}
					}
				],
				yAxes: [
					{
						gridLines: {
							color: '#e1e2e5'
						},

						ticks: {
							maxTicksLimit: 6,
							fontColor: '#7d889e'
						}
					}
				]
			}
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
				{this.state.name === 'Last Year' && (
					<Line data={chartsLastData} options={options} />
				)}
				{this.state.name === 'This Year' && (
					<Line data={chartsThisData} options={options} />
				)}
			</div>
		);
	}
}
