import './_charts.scss';

import React, { Component } from 'react';

import { Row, Col } from 'reactstrap';

import LineChart from './components/LineChart.js';
import DoughnutChart from './components/DoughnutChart.js';

export default class ChartsSection extends Component {
	render() {
		return (
			<Row>
				<Col xs="12" lg="6">
					<DoughnutChart />
				</Col>
				<Col xs="12" lg="6">
					<LineChart />
				</Col>
			</Row>
		);
	}
}
