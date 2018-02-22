import "./_home-page.scss";

import React, { Component } from "react";

import ChartsSection from "./components/charts section/ChartsSection.js";
import NotificationSection from "./components/notifications section/NotificationSection.js";

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
			<div className="container">
				<h2 className="main-title">Hello {this.state.username}!</h2>
				<ChartsSection />
				<NotificationSection />
			</div>
		);
	}
}
