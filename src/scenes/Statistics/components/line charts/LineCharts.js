import "./LineCharts.scss";

import React, { Component } from "react";

import { LineChart, Line } from "recharts";
import lineChartData from "./data.js";

import _map from "lodash/map";

const LineChartItem = ({ data }) => (
	<div className="linechart-item">
		<div className="description text-center">
			<p>{data.first_description}</p>
			<p>{data.second_description}</p>
		</div>
		<LineChart width={200} height={100} data={data.info}>
			<Line
				type="monotone"
				dataKey="pv"
				stroke={data.color}
				strokeWidth={3}
			/>
		</LineChart>
	</div>
);

export default class LineCharts extends Component {
	render() {
		return (
			<div className="charts linechart">
				{_map(lineChartData, (item, index) => (
					<LineChartItem key={index} data={item} />
				))}
			</div>
		);
	}
}
