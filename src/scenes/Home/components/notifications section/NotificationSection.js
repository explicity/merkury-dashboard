import "./_home-sections.scss";

import React, { Component } from "react";

import { Row, Col } from "reactstrap";

import TaskSection from "./task section/TaskSection.js";
import MessagesSection from "./messages section/MessagesSection.js";
import ActivitySection from "./activity section/ActivitySection.js";

export default class NotificationSection extends Component {
	render() {
		return (
			<Row>
				<Col xs="12" lg="4">
					<TaskSection />
				</Col>
				<Col xs="12" lg="4">
					<MessagesSection />
				</Col>
				<Col xs="12" lg="4">
					<ActivitySection />
				</Col>
			</Row>
		);
	}
}
