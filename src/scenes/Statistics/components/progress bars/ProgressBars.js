import "react-circular-progressbar/dist/styles.css";
import "./ProgressBars.scss";

import React, { Component } from "react";

import CircularProgressbar from "react-circular-progressbar";
import _map from "lodash/map";

const ProgressBarsItem = ({ info }) => (
	<div className="col-12 col-md-4">
		<div className="progressbars">
			<div className="progressbars-item">
				<CircularProgressbar
					percentage={info.percentages}
					className={`progressbars-item-${info.color}`}
				/>
			</div>
			<div className="description">
				<p>{info.first_description}</p>
				<p>{info.second_description}</p>
			</div>
		</div>
	</div>
);

export default class ProgressBars extends Component {
	render() {
		const barsInfo = [
			{
				first_description: "2,300$",
				second_description: "Direct Sales",
				percentages: 45,
				color: "blue"
			},

			{
				first_description: "980$",
				second_description: "Channel Sales",
				percentages: 20,
				color: "violet"
			},

			{
				first_description: "1,250$",
				second_description: "Channel Sales",
				percentages: 25,
				color: "pink"
			}
		];

		return (
			<div className="charts">
				<div className="charts-header">
					<h3 className="charts-header-title">Total sales</h3>
				</div>
				<div className="container">
					<div className="row">
						{_map(barsInfo, (item, index) => (
							<ProgressBarsItem key={index} info={item} />
						))}
					</div>
				</div>
			</div>
		);
	}
}
