import "./../../styles/layout/_home-sections.scss";

import React, { Component } from "react";

import ActivityItem from "./activity section/ActivityItem.js";

import User1 from "./../../../public/img/user1.png";
import User2 from "./../../../public/img/user2.png";
import User3 from "./../../../public/img/user3.png";
import User4 from "./../../../public/img/user4.png";

export default class MessagesSection extends Component {
	render() {
		const activityData = [
			{
				id: 1,
				url: User1,
				user: "Nina Jones",
				action: "added a new project",
				project: "Free UI Kit",
				time: "Just now"
			},

			{
				id: 2,
				url: User2,
				user: "James Smith",
				action: "commented project",
				project: "Free PSD Template",
				time: "40 minutes ago"
			},

			{
				id: 3,
				url: User3,
				user: "Alex Clooney",
				action: "completed task",
				project: "Symu Website",
				time: "1 hour ago"
			},

			{
				id: 4,
				url: User4,
				user: "Alexandra Spears",
				action: "added a new project",
				project: "Free PSD (...)",
				time: "3 hours ago"
			}
		];

		return (
			<div className="content">
				<div className="content-header">
					<h3 className="content-header-title">Activity</h3>
					<div>
						<span className="badge badge-primary badge-activity">
							10
						</span>
					</div>
				</div>
				<ActivityItem obj={activityData} />
			</div>
		);
	}
}
