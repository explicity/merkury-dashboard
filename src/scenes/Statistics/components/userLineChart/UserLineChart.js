import React, { Component } from 'react';

import { Line } from 'react-chartjs-2';

export default class UserLineChart extends Component {
	render() {
		const userLineData = {
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

		const options = {
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
				<Line data={userLineData} options={options} />
			</div>
		);
	}
}
