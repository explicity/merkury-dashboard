import "./_signup-tabs.scss";

import React, { Component } from "react";
import { TabContent } from "reactstrap";

import Login from "./Login/Login.js";
import Register from "./Register/Register.js";

export default class SignupTabs extends Component {
	render() {
		return (
			<TabContent activeTab={this.props.activeTab}>
				<Register />
				<Login />
			</TabContent>
		);
	}
}
