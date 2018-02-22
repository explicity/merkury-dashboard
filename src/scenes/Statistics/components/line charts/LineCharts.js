import "./LineCharts.scss";

import React, { Component } from "react";

import { LineChart, Line } from "recharts";
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
		const lineChartData = [
			{
				color: "#f83c7b",
				first_description: "1,560",
				second_description: "Sales",
				info: [
					{ name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
					{ name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
					{ name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
					{ name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
					{ name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
					{ name: "Page F", uv: 2390, pv: 3800, amt: 2500 }
				]
			},
			{
				color: "#5584ff",
				first_description: "3,230",
				second_description: "Views",
				info: [
					{ name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
					{ name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
					{ name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
					{ name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
					{ name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
					{ name: "Page F", uv: 2390, pv: 3800, amt: 2500 }
				]
			}
		];

		return (
			<div className="charts linechart">
				{_map(lineChartData, (item, index) => (
					<LineChartItem key={index} data={item} />
				))}
			</div>
		);
	}
}
