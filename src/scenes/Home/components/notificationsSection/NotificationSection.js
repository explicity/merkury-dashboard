import "./_home-sections.scss";

import React, { Component } from "react";

import { Row, Col } from "reactstrap";

import TaskSection from "./taskSection/TaskSection.js";
import MessagesSection from "./messagesSection/MessagesSection.js";
import ActivitySection from "./activitySection/ActivitySection.js";

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
