import "react-circular-progressbar/dist/styles.css";
import "./ProgressBars.scss";

import React, { Component } from "react";

import CircularProgressbar from "react-circular-progressbar";
import barsInfo from "./data.js";

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
		return (
			<div className="charts">
				<div className="charts-header">
					<h3 className="charts-header-title">Total sales</h3>
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
