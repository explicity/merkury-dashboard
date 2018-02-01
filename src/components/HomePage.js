import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

import LineChart from "./home page/LineChart.js";
import DoughnutChart from "./home page/DoughnutChart.js";

export default class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: ""
		};
	}

	componentWillMount() {
		let userData = JSON.parse(localStorage.getItem("usersRecord"));

		this.setState({
			username: userData.username
		});
	}

	render() {
		return (
			<div>
				<Container>
					<h2 className="main-title">Hello {this.state.username}!</h2>
					<Row>
						<Col xs="12" lg="6">
							<DoughnutChart />
						</Col>
						<Col xs="12" lg="6">
							<LineChart />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
